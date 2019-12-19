import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
  const { values, handleChange, resetForm } = useContext(
    SearchContext,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={values.search}
          onChange={handleChange}
        />

        <button type="submit">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
