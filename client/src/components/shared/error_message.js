import React from 'react';

export default (props) => {
  if (!props.error) {
    return '';
  }

  let message = '';
  switch (props.error.type) {
    case 'required':
      message = 'This is a required field.';
      break;
    case 'maxLength':
      message = 'Cannot be over 30 characters in length.';
      break;
    default:
      message = props.error.message;
  }

  return <p className="text-danger mt-1 mb-0">{message}</p>;
};
