import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { logInAction } from '../../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
    this.props.logInAction(this.state);
    // this.props.history.replace({
    //   pathname: '/',
    // });

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
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your email address.
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
          <Form.Control.Feedback type="invalid">
            Please enter your password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          value="Login"
          className="mt-5 mb-3"
          block
        >
          SUBMIT
        </Button>

        <Link
          to="/register"
          className="login-link d-flex justify-content-center"
        >
          Don't have an account? SIGN UP
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

export default connect(mapStateToProps, { logInAction })(LoginForm);
