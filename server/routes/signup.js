const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/User');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  '/signup',
  [
    check('firstName', 'Please enter a first name.').not().isEmpty(),
    check('lastName', 'Please enter a last name.').not().isEmpty(),
    check('email', 'Please enter a valid email.').isEmail(),
    check('password', 'Password must be at least 6 characters.')
      .isLength({ min: 6 })
      .custom((value, { req, loc, path }) => {
        if (value !== req.body.confirmPassword) {
          throw new Error('Passwords are not matching.');
        } else {
          return value;
        }
      })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({
          msg: 'User Already Exists',
        });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save(function(err, doc) {
        if(err) {
          return console.error(err);
        }
      });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Error in Saving');
    }
  }
);

module.exports = router;
