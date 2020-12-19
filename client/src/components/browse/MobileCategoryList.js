import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Collapse } from 'react-bootstrap';
import CategoryListItem from './CategoryListItem';
import '../../scss/browse/browse.scss';

/* eslint-disable */
export default function CategoryList(props) {
  const [open, setOpen] = useState(false);
  let history = useHistory();
  const categoryItems = props.genreList.map((genre) => (
    <CategoryListItem
      key={genre.id}
      id={genre.id}
      name={genre.name}
      slug={genre.slug}
    />
  ));

  // Closes the category list selection after making a choice
  useEffect(() => {
    return history.listen(() => {
      setOpen(open);
    })
  }, [history])

  return (
    <>
      <div className="bottom-border pb-2 mb-4">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="category-list"
          aria-expanded={open}
        >
          Filters
        </Button>
      </div>
      <Collapse in={open}>
        <div id="category-list">
          {categoryItems}
        </div>
      </Collapse>
    </>
  );
}
