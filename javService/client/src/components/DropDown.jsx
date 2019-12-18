import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { sortReviews } = props;
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Sort By</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Sort By</DropdownItem>
        <DropdownItem divider />
        <DropdownItem item="rating" order="desc" onClick={sortReviews}>Rating High to Low</DropdownItem>
        <DropdownItem item="rating" order="asc" onClick={sortReviews}>
          Rating Low to High
        </DropdownItem>
        <DropdownItem item="reviewDate" order="desc" onClick={sortReviews}>
          Newest First
        </DropdownItem>
        <DropdownItem item="reviewDate" order="asc" onClick={sortReviews}>
          Oldest First
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

Dropdown.propTypes = {
  sortReviews: PropTypes.func,
};

export default DropDown;
