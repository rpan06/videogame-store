import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import search from '../../assets/search.svg';
import '../../scss/navbar.scss';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.replace({
      pathname: '/search',
      search: `?query=${this.state.value}`,
    });
  };

  render() {
    return (
      <Form inline id="form-id" onSubmit={this.handleSubmit}>
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
            value={this.state.value}
            onChange={this.handleChange}
          />
        </InputGroup>
      </Form>
    );
  }
}

export default withRouter(Searchbar);
