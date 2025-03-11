import React from "react";
import ProductDetail from "../components/ProductDetail";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import React-Bootstrap

const ProductDetailPage = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <div className="p-4">
                        <ProductDetail />
                    </div>
                </Col>
            </Row>
           
        </Container>
    );
};

export default ProductDetailPage;
