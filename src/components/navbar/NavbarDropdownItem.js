import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../../scss/navbar.scss';

export default function NavbarDropdownItem() {
  return (
    <>
      <NavDropdown.Item as={Link} to="/action">
        Action
      </NavDropdown.Item>
      <NavDropdown.Divider />
    </>
  );
}
