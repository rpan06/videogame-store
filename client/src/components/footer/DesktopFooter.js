import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/footer.scss';

import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import upchevron from '../../assets/up-chevron.svg';

export default function DesktopFooter() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer mt-auto py-3">
        <Container>
          <Row className="py-5">
            <Col lg={3}>
              <img src={logo} alt="store logo" className="mb-3" />
              <p>GAME NATION</p>
              <p className="primary-light">
                Making it easier than ever to get access to the games you love.
              </p>
            </Col>
            <Col lg={{ span: 2, offset: 1 }}>
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
            <Col lg={2}>
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
            <Col lg={2}>
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
            <Col lg={2} className="d-flex justify-content-end">
              <button type="button" onClick={scrollTop}>
                <img src={upchevron} alt="up chevron" />
              </button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg className="copyright">
              Copyright © 2020. Game Nation. All rights reserved.
            </Col>
            <Col lg className="text-right">
              <Link to="/" className="footer-link">
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
