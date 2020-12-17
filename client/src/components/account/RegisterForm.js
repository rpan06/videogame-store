import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { registerAction } from '../../actions';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      validated: false,
    };
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    // Checks the form to make sure that required fields have been added
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.preventDefault();
    this.props.registerAction(this.state);
    this.props.history.replace({
      pathname: '/',
    });

    this.setState({
      validated: true,
    });
  };

  render() {
    return (
      <Form
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
        className="py-4"
      >
        <Form.Row>
          <Form.Group as={Col} xs={12} lg={6} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="firstName"
              type="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              name="lastName"
              type="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be at least 6 characters long.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Please confirm your password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-5 mb-3" block>
          SUBMIT
        </Button>

        <Link to="/login" className="login-link d-flex justify-content-center">
          Have an account? SIGN IN
        </Link>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.redux.user,
  };
}

export default connect(mapStateToProps, { registerAction })(RegisterForm);
