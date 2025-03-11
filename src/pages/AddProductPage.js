import React from 'react';
import AddProductForm from '../components/AddProductForm';
import { Container, Row, Col } from 'react-bootstrap';

const AddProductPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>Add Product</h2>
          <AddProductForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductPage;
