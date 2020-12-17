import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CreateAccountForm from './CreateAccountForm';
import '../../scss/account/account.scss';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pt-4">
        <Container className="py-4 my-5" id="account-container">
          <Row>
            <Col className="account-box p-5" lg={{ span: 8, offset: 2 }}>
              <h5 className="text-uppercase text-center py-3">SIGN UP</h5>
              <CreateAccountForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
