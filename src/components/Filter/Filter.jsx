import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, handleChangeFilter }) => {
  return (
    <form>
      <label htmlFor="filter">
        <input
          className={css.filterInput}
          type="text"
          value={value}
          name="filter"
          onChange={handleChangeFilter}
          placeholder="Search..."
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
