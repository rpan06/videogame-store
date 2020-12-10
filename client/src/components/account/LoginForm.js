import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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

    this.setState({
      validated: true,
    });

    // Add login api here
  };

  render() {
    return (
      <Form
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
        className="py-4"
      >
        <Form.Group controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-5 mb-3" block>
          SUBMIT
        </Button>

        <Link
          to="/register"
          className="login-link d-flex justify-content-center"
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? SIGN UP
        </Link>
      </Form>
    );
  }
}
