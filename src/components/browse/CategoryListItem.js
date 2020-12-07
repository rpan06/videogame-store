import React from 'react';
import '../../scss/browse/browse.scss';

export default function CategoryListItem(props) {
  return (
    <>
      <button
        type="button"
        className="category-list"
        onClick={() => console.log('category list item clicked')}
      >
        {props.name}
      </button>
    </>
  );
}
