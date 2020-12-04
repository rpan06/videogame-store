import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarDropdownItem from './NavbarDropdownItem';
import '../../scss/navbar.scss';

export default function NavbarDropdown(props) {
  const dropdownItem = props.genreList.map((genre) => (
    <NavbarDropdownItem key={genre.id} id={genre.id} name={genre.name} />
  ));

  return (
    <>
      <NavDropdown title="Browse" id="collasible-nav-dropdown" className="mx-1">
        {dropdownItem}
      </NavDropdown>
    </>
  );
}
