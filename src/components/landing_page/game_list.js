import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGameList } from '../../actions';

/* eslint-disable */

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getGameList();
    // setInterval(() => {
    //   console.log(this.props);
    // }, 1000);
  }

  render() {
    return <div className="center container"></div>;
  }
}

function mapStateToProps(state) {
  return {
    list: state.list.list,
  };
}

export default connect(mapStateToProps, {
  getGameList,
})(GameList);

/* eslint-enable */
