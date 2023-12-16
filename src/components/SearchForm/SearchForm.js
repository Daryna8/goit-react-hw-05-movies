import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return;
    }
    setSearchParams({ query });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="query"
        onChange={handleChange}
        value={query}
      />
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  width: 340px;
  border: 1px solid #000;
  margin-right: 10px;
  font-size: 20px;
`;

const StyledBtn = styled.button`
  width: 160px;
  padding: 10px;
  font-size: 20px;
  background-color: #096a3e;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3b906a;
  }
`;
