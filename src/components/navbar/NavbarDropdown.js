import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarDropdownItem from './NavbarDropdownItem';
import '../../scss/navbar.scss';

export default function NavbarDropdown() {
  return (
    <>
      <NavDropdown title="Browse" id="collasible-nav-dropdown" className="mx-1">
        <NavbarDropdownItem />
      </NavDropdown>
    </>
  );
}
