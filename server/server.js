const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./routes/login');
const signup = require('./routes/signup');
const InitiateMongoServer = require('./config/mongo_db');

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Working' });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use('/user', login);
app.use('/user', signup);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
