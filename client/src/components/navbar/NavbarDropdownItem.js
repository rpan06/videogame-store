import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../scss/navbar.scss';

export default function NavbarDropdownItem(props) {
  const sendTo = {
    pathname: `/browse/${props.slug}`,
    paramName: props.name,
  };

  return (
    <>
      <NavDropdown.Item as={Link} to={sendTo}>
        {props.name}
      </NavDropdown.Item>
      <NavDropdown.Divider />
    </>
  );
}
