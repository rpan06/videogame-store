import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SignInForm from './SignInForm';
import FetchCookie from '../../helper/fetchCookie';
import '../../scss/account/account.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // Redirects user to homepage if logged in.
    if (FetchCookie('token')) {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div className="pt-4">
        <Container className="py-4 my-5" id="account-container">
          <Row>
            <Col className="account-box p-5" lg={{ span: 8, offset: 2 }}>
              <h5 className="text-uppercase text-center py-3">SIGN IN</h5>
              <SignInForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
