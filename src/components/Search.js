import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(ProductContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

 

  return (
    <Form>
      <Form.Group>
        <Form.Label>Tìm kiếm</Form.Label>
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
      
    </Form>
  );
};

export default Search;
