import React from 'react';
// import { Link } from 'react-router-dom'

/* eslint-disable */

export default (props) => {
  const container = {
    height: '100vh',
    display: 'flex',
  };

  const content = {
    margin: 'auto',
    textAlign: 'center',
  };

  return (
    <div style={container}>
      <div style={content}>
        <h1 className='font-weight-light'>404</h1>
        <h1 className='font-weight-bold'>PAGE NOT FOUND</h1>
        <p>
          The page you are looking for cannot be found. It might have been
          deleted or moved!
        </p>
        {/* <Link to="/">Back To Home</Link> */}
      </div>
    </div>
  );
};

/* eslint-enable */
