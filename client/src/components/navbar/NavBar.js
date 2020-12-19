import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { getGenreListData } from '../../actions/rawg-api';
import { logOutAction } from '../../actions';
import FetchCookie from '../../helper/fetchCookie';
import NavbarDropdown from './NavbarDropdown';
import Searchbar from '../search/Searchbar';

import logo from '../../assets/logo.svg';

import '../../scss/navbar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreList: [],
      isLoggedIn: false,
      busy: false,
    };

    this.accountIcon = (
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

    this.cartIcon = (
      <svg
        width="23"
        height="18"
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* do not change to clipPath, needs to have the - to display properly */}
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
  }

  async componentDidMount() {
    if (FetchCookie('token')) {
      this.setState({
        isLoggedIn: true,
      });
    }
    const genreResponse = await getGenreListData();
    this.setState({
      genreList: genreResponse.map((res) => ({
        id: res.id,
        name: res.name,
        slug: res.slug,
      })),
    });
  }

  handleLoginLogout = () => {
    this.setState({
      busy: true,
    });
    if (this.state.isLoggedIn) {
      this.props.logOutAction();
      window.location.reload();
    } else {
      window.location.href = '/signin';
    }
  };

  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="navbar-scss"
          fixed="top"
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="mx-1">
                Store
              </Nav.Link>
              <NavbarDropdown genreList={this.state.genreList} />
              <Nav.Link as={Link} to="/cart" className="mx-1">
                Cart
              </Nav.Link>
            </Nav>
            <Searchbar />

            <Button
              id="login-logout-btn"
              variant="outline-warning"
              onClick={this.handleLoginLogout}
            >
              {this.state.busy ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : this.state.isLoggedIn ? (
                'Logout'
              ) : (
                'Login'
              )}
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    redux: state.redux,
  };
}

export default connect(mapStateToProps, { logOutAction })(NavBar);
