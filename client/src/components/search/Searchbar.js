import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import search from '../../assets/search.svg';
import '../../scss/navbar.scss';

// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
require('es6-promise').polyfill();
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
require('isomorphic-fetch');

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  // saves what the user is typing in the search field
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log('searchterm', searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitting', searchTerm);
    console.log('in submit', searchTerm);
    history.push({
      pathname: '/search',
      search: `?query=${searchTerm}`,
    });
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault();
        handleSubmit(e);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <Form inline id="form-id">
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
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
}
