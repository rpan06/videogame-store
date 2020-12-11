import React from 'react';
import '../../scss/shared/loading_spinner.scss';

export default () => {
  return (
    <div className="w-100 d-flex justify-content-center py-5 mt-5">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
