import React, { createContext } from 'react';
import useForm from '../customhooks/useForm';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const initialValues = { search: '' };

  const { values, handleChange, resetForm } = useForm(initialValues);

  return (
    <SearchContext.Provider
      value={{ values, handleChange, resetForm }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
