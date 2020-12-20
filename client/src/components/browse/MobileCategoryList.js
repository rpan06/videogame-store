import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Collapse } from 'react-bootstrap';
import CategoryListItem from './CategoryListItem';
import '../../scss/browse/browse.scss';

export default function CategoryList(props) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const categoryItems = props.genreList.map((genre) => (
    <CategoryListItem
      key={genre.id}
      id={genre.id}
      name={genre.name}
      slug={genre.slug}
    />
  ));

  const filterIcon = (
    <svg
      width="29"
      height="25"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M0.909091 3.63636H4.54545C4.54545 4.6392 5.3608 5.45455 6.36364 5.45455H8.18182C9.18466 5.45455 10 4.6392 10 3.63636H22.7273C23.229 3.63636 23.6364 3.23011 23.6364 2.72727C23.6364 2.22443 23.229 1.81818 22.7273 1.81818H10C10 0.815341 9.18466 0 8.18182 0H6.36364C5.3608 0 4.54545 0.815341 4.54545 1.81818H0.909091C0.407386 1.81818 0 2.22443 0 2.72727C0 3.23011 0.407386 3.63636 0.909091 3.63636Z"
          fill="#e4bd00"
        />
        <path
          d="M22.7273 9.0909H17.2727C17.2727 8.08806 16.4574 7.27272 15.4545 7.27272H13.6364C12.6335 7.27272 11.8182 8.08806 11.8182 9.0909H0.909091C0.407386 9.0909 0 9.49715 0 9.99999C0 10.5028 0.407386 10.9091 0.909091 10.9091H11.8182C11.8182 11.9119 12.6335 12.7273 13.6364 12.7273H15.4545C16.4574 12.7273 17.2727 11.9119 17.2727 10.9091H22.7273C23.229 10.9091 23.6364 10.5028 23.6364 9.99999C23.6364 9.49715 23.229 9.0909 22.7273 9.0909Z"
          fill="#e4bd00"
        />
        <path
          d="M22.7273 16.3636H10C10 15.3608 9.18466 14.5455 8.18182 14.5455H6.36364C5.3608 14.5455 4.54545 15.3608 4.54545 16.3636H0.909091C0.407386 16.3636 0 16.7699 0 17.2727C0 17.7756 0.407386 18.1818 0.909091 18.1818H4.54545C4.54545 19.1847 5.3608 20 6.36364 20H8.18182C9.18466 20 10 19.1847 10 18.1818H22.7273C23.229 18.1818 23.6364 17.7756 23.6364 17.2727C23.6364 16.7699 23.229 16.3636 22.7273 16.3636Z"
          fill="#e4bd00"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="23.6364" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  // Closes the category list selection after making a choice
  useEffect(() => {
    return history.listen(() => {
      setOpen(open);
    });
  }, [history]);

  return (
    <>
      <div className="pb-2">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="category-list"
          aria-expanded={open}
          className="text-right"
        >
          {filterIcon}
        </Button>
      </div>
      <Collapse in={open}>
        <div id="category-list" className="text-right mb-4">
          {categoryItems}
        </div>
      </Collapse>
    </>
  );
}
