import React from 'react';
import CategoryListItem from './CategoryListItem';
import '../../scss/browse/browse.scss';

export default function CategoryList(props) {
  const categoryItems = props.genreList.map((genre) => (
    <CategoryListItem
      key={genre.id}
      id={genre.id}
      name={genre.name}
      slug={genre.slug}
    />
  ));
  return (
    <>
      <div className="bottom-border pb-2">
        <p>Filters</p>
      </div>
      <div className="mt-3 d-flex flex-column pb-5" id="category-list">
        {categoryItems}
      </div>
    </>
  );
}
