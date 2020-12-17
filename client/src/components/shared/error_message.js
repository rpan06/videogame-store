/* eslint-disable */
import React from 'react';

export default (props) => {
  if (!props.error) {
    return '';
  }

  let message = '';
  if (props.error.type === 'required') {
    message = 'This is a required field.';
  } else if (props.error.type === 'maxLength') {
    message = 'Cannot be over 30 characters in length.';
  } else {
    message = props.error.message;
  }

  return <p className="text-danger mt-1 mb-0">{message}</p>;
};
