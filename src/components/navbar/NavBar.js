import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
// import axios from 'axios';

import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';

import '../../scss/navbar.scss';

export default function NavBar() {
  const accountIcon = (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.38672 8.31023C10.6611 7.51641 11.5112 6.10242 11.5112 4.49367C11.5112 2.01586 9.4957 0 7.01789 0C4.54008 0 2.52457 2.01586 2.52457 4.49332C2.52457 6.10242 3.37465 7.51605 4.64906 8.30988C1.94133 9.28371 0 11.8772 0 14.9157V17.4554C0 17.7564 0.243633 18 0.544219 18H13.4912C13.7918 18 14.0354 17.7564 14.0354 17.4558V14.9161C14.0354 11.8772 12.0941 9.28406 9.38672 8.31023ZM12.947 16.9112H1.08879V14.9157C1.08879 11.6466 3.74836 8.98699 7.01789 8.98699C10.2871 8.98699 12.947 11.6466 12.947 14.9157V16.9112ZM10.4224 4.49332C10.4224 6.37066 8.89523 7.8982 7.01789 7.8982C5.14055 7.8982 3.61336 6.37066 3.61336 4.49332C3.61336 2.61598 5.14055 1.08879 7.01789 1.08879C8.89523 1.08879 10.4224 2.61598 10.4224 4.49332Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14.0354" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const favoritesIcon = (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5032 3.70781C19.1878 2.8077 18.6338 1.99599 17.901 1.35985C17.1676 0.723318 16.2854 0.289206 15.35 0.104744C14.9974 0.0353183 14.6349 0 14.2727 0C13.2157 0 12.1877 0.298893 11.2999 0.864389C10.7655 1.20486 10.296 1.6317 9.90915 2.12535C9.52246 1.63251 9.05344 1.20647 8.51942 0.866811C7.63203 0.302122 6.60477 0.00363273 5.54865 0.00363273C4.66872 0.00363273 3.78536 0.220991 2.99464 0.632096C2.20452 1.043 1.51935 1.64079 1.01298 2.36087C0.494511 3.09872 0.178665 3.92497 0.0741227 4.8164C-0.0173011 5.59724 0.0533354 6.43539 0.284216 7.30765C0.741537 9.03542 1.75346 10.6116 2.52198 11.6294C4.19284 13.8425 6.49054 15.8514 9.54587 17.7707L9.91076 18L10.2759 17.7707C14.0341 15.4099 16.6574 12.9172 18.2953 10.1505C19.2374 8.55933 19.728 7.14176 19.7956 5.81682C19.8332 5.07836 19.7349 4.36877 19.5032 3.70781ZM9.91076 16.3766C7.18116 14.6187 5.11959 12.7925 3.61705 10.8025C2.92259 9.88286 2.01098 8.46912 1.61077 6.95669C1.42409 6.25153 1.36576 5.58533 1.43721 4.97624C1.51491 4.31387 1.74982 3.69954 2.1359 3.15039C2.51613 2.60951 3.03218 2.15986 3.62795 1.84987C4.22392 1.53988 4.8881 1.3762 5.54886 1.3762C6.34362 1.3762 7.11598 1.60042 7.78279 2.02485C8.43264 2.43837 8.95515 3.02183 9.2938 3.71205L9.91056 4.96918L10.5261 3.71144C10.8644 3.02042 11.3869 2.43635 12.0371 2.02222C12.7043 1.59699 13.4773 1.37237 14.2727 1.37237C14.5459 1.37237 14.819 1.3988 15.0844 1.45108C15.7855 1.58932 16.4485 1.91607 17.0015 2.39619C17.5542 2.87592 17.9714 3.48642 18.2081 4.1617C18.3807 4.65374 18.4535 5.18714 18.4251 5.74678C18.3692 6.84427 17.9403 8.05599 17.1145 9.45117C15.6428 11.9368 13.284 14.2052 9.91076 16.3766Z"
        fill="white"
      />
    </svg>
  );

  const cartIcon = (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* do not change to clipPatch, needs to have the - to display properly */}
      <g clipPath="url(#clip0)">
        <path
          d="M1.44632 1.28571H4.2149C4.31604 1.65 7.16432 11.9031 7.29847 12.3866C7.37561 12.6647 7.6289 12.8571 7.91775 12.8571H19.4892C19.775 12.8571 20.0266 12.6681 20.1063 12.3934L22.7206 3.39343C22.7772 3.19929 22.7386 2.98971 22.6173 2.82814C22.496 2.66657 22.3058 2.57143 22.1035 2.57143H5.90647L5.32318 0.471C5.24561 0.192429 4.99232 0 4.70347 0H1.44632C1.09147 0 0.803467 0.288 0.803467 0.642857C0.803467 0.997714 1.09147 1.28571 1.44632 1.28571ZM21.2472 3.85714L19.0062 11.5714H8.40632L6.26347 3.85714H21.2472Z"
          fill="white"
        />
        <path
          d="M11.7749 16.0714C11.7749 15.0081 10.9096 14.1428 9.8463 14.1428C8.78301 14.1428 7.91772 15.0081 7.91772 16.0714C7.91772 17.1347 8.78301 18 9.8463 18C10.9096 18 11.7749 17.1347 11.7749 16.0714ZM9.20344 16.0714C9.20344 15.717 9.49187 15.4285 9.8463 15.4285C10.2007 15.4285 10.4892 15.717 10.4892 16.0714C10.4892 16.4258 10.2007 16.7143 9.8463 16.7143C9.49187 16.7143 9.20344 16.4258 9.20344 16.0714Z"
          fill="white"
        />
        <path
          d="M19.4892 16.0714C19.4892 15.0081 18.6239 14.1428 17.5606 14.1428C16.4973 14.1428 15.632 15.0081 15.632 16.0714C15.632 17.1347 16.4973 18 17.5606 18C18.6239 18 19.4892 17.1347 19.4892 16.0714ZM16.9177 16.0714C16.9177 15.717 17.2062 15.4285 17.5606 15.4285C17.915 15.4285 18.2034 15.717 18.2034 16.0714C18.2034 16.4258 17.915 16.7143 17.5606 16.7143C17.2062 16.7143 16.9177 16.4258 16.9177 16.0714Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="21.9429"
            height="18"
            fill="white"
            transform="translate(0.803467)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar-scss"
      >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" id="store-logo" />
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-none d-xl-block"
          id="store-name"
        >
          Game Nation
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/account"
          alt="account icon"
          className="d-block d-md-none"
        >
          {accountIcon}
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/wishlist"
          alt="favorites icon"
          className="d-block d-md-none"
        >
          {favoritesIcon}
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to="/cart"
          alt="cart icon"
          className="d-block d-md-none"
        >
          {cartIcon}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/store" className="mx-1">
              Store
            </Nav.Link>
            <NavDropdown
              title="Browse"
              id="collasible-nav-dropdown"
              className="mx-1"
            >
              <NavDropdown.Item as={Link} to="/action">
                Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/indie">
                Indie
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/adventure">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/rpg">
                RPG
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="searchbar-icon">
                  <img src={search} alt="search icon" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                id="navbar-search"
              />
            </InputGroup>
          </Form>
          <Navbar.Brand
            as={Link}
            to="/account"
            alt="account icon"
            className="d-none d-lg-block ml-4"
          >
            {accountIcon}
          </Navbar.Brand>
          <Navbar.Brand
            as={Link}
            to="/wishlist"
            alt="favorites icon"
            className="d-none d-lg-block ml-2"
          >
            {favoritesIcon}
          </Navbar.Brand>
          <Navbar.Brand
            as={Link}
            to="/cart"
            alt="cart icon"
            className="d-none d-lg-block ml-1"
          >
            {cartIcon}
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
