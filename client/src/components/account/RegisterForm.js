import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { createAccount } from '../../actions/user';

export default class RegisterForm extends Component {
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

  handleSubmit = (e) => {
    // Checks the form to make sure that required fields have been added
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // API call
    createAccount({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
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
              ype="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your first name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
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
            placeholder="Email address"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
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
            placeholder="Confirm password"
            type="password"
            value={this.state.confirmPassword}
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
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
