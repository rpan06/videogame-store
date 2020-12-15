import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/browse/browse.scss';

export default function CategoryListItem(props) {
  const sendTo = {
    pathname: `/browse/${props.slug}`,
    paramName: props.name,
  };

  return (
    <>
      <Link to={sendTo}>
        <button type="button" className="category-list">
          {props.name}
        </button>
      </Link>
    </>
  );
}
