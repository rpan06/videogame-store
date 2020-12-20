import React from 'react';
import { connect } from 'react-redux';
import '../../scss/custom.scss';

function ErrorScreen(props) {
  return (
    <div
      className={`overlay error-screen ${
        props.redux.apiError ? 'visible' : ''
      }`}
    >
      <div className="generic-msg-container">
        <div className="generic-msg-content">
          <h1 className="font-weight-light">OOPS</h1>
          <h2 className="font-weight-bold">Something went wrong.</h2>
          <p>Please refresh the page or try again later!</p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    redux: state.redux,
  };
}

export default connect(mapStateToProps, {})(ErrorScreen);
