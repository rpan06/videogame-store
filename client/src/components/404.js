import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
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
        <h1 className="font-weight-light">404</h1>
        <h1 className="font-weight-bold">PAGE NOT FOUND</h1>
        <p>
          The page you are looking for cannot be found. It might have been
          deleted or moved!
        </p>
        <button className="btn btn-yellow btn-sm px-5 mt-4" type="button">
          <Link to="/">
            <span className="text-dark">Back To Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
