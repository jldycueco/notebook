import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues || '');

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    resetForm();
  };

  return { values, handleChange, resetForm, handleSubmit };
};

export default useForm;
