import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../../scss/navbar.scss';

export default function NavbarDropdownItem(props) {
  const lowercaseGenreName = props.name.toLowerCase();
  return (
    <>
      <NavDropdown.Item as={Link} to={`/${lowercaseGenreName}`}>
        {props.name}
      </NavDropdown.Item>
      <NavDropdown.Divider />
    </>
  );
}
