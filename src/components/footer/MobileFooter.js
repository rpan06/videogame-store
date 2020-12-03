import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/footer.scss';

import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import upchevron from '../../assets/up-chevron.svg';

export default function MobileFooter() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer mt-auto py-3">
        <Container>
          <Row>
            <Col xs={{ span: 12 }} className="pt-2 pb-4 border-b-gray">
              <button type="button" onClick={scrollTop} className="float-right">
                <img src={upchevron} alt="up chevron" />
              </button>
            </Col>
            <Col xs={{ span: 12 }} className="pt-4 pb-2 border-b-gray">
              <img src={logo} alt="store logo" className="mb-3" />
              <p>GAME NATION</p>
            </Col>
            <Col xs={{ span: 12 }} className="pt-4 pb-4 border-b-gray">
              <p className="footer-title">Support</p>
              <Link to="/" className="footer-link">
                <p>Contact Us</p>
              </Link>
              <Link to="/" className="footer-link">
                <p>FAQ</p>
              </Link>
              <Link to="/" className="footer-link">
                <p>Refunds</p>
              </Link>
              <Link to="/" className="footer-link">
                Accessibility
              </Link>
            </Col>
            <Col xs={{ span: 12 }} className="pt-4 pb-4 border-b-gray">
              <p className="footer-title">About</p>
              <Link to="/" className="footer-link">
                <p>Our Story</p>
              </Link>
              <Link to="/" className="footer-link">
                <p>Benefits</p>
              </Link>
              <Link to="/" className="footer-link">
                <p>Team</p>
              </Link>
              <Link to="/" className="footer-link">
                Careers
              </Link>
            </Col>
            <Col xs={{ span: 12 }} className="pt-4 pb-4 border-b-gray">
              <p className="footer-title">Follow Us</p>
              <Link to="/" className="footer-link">
                <p>
                  <img src={facebook} alt="facebook icon" className="pr-2" />
                  Facebook
                </p>
              </Link>
              <Link to="/" className="footer-link">
                <p>
                  <img src={twitter} alt="twitter icon" className="pr-2" />
                  Twitter
                </p>
              </Link>
              <Link to="/" className="footer-link">
                <p>
                  <img src={instagram} alt="instagram icon" className="pr-2" />
                  Instagram
                </p>
              </Link>
            </Col>
          </Row>
          <Row className="py-5">
            <Col className="copyright">
              Copyright © 2020. Game Nation. All rights reserved.
            </Col>
            <Col xs={{ span: 12, order: 'first' }}>
              <Link to="/" className="footer-link pb-2">
                <span className="pr-5">Terms and Conditions</span>
              </Link>
              <Link to="/" className="footer-link">
                <span>Privacy Policy</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
