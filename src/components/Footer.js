import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <Container>
          <Row className="py-5">
            <Col lg xs={{ span: 12 }}>
              1
            </Col>
            <Col lg xs={{ span: 12 }}>
              2
            </Col>
            <Col lg xs={{ span: 12 }}>
              3
            </Col>
            <Col lg xs={{ span: 12 }}>
              4
            </Col>
            <Col lg={{ order: 'last' }} xs={{ span: 12, order: 'first' }}>
              up arrow
            </Col>
          </Row>
          <Row className="py-5">
            <Col>copyright</Col>
            <Col lg={{ order: 'last' }} xs={{ span: 12, order: 'first' }}>
              Terms and Conditions
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
