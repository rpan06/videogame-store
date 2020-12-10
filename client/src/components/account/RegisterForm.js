/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // put code for handling user registration here
  }

  render() {
    return (
      <Form className="py-4">
        <Form.Row>
          <Form.Group as={Col} xs={12} lg={6} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstName" placeholder="First name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" placeholder="Last name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
        </Form.Group>

        <Button variant="primary" type="button" className="mt-5 mb-3" onClick={this.handleSubmit} block>
          SUBMIT
        </Button>

        <Link to="/login" className="login-link d-flex justify-content-center">
          Have an account? SIGN IN
        </Link>
      </Form>
    );
  }
}
