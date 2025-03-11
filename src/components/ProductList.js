import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Card, Button } from "react-bootstrap";

const ProductList = () => {
    const { products, category, brand, searchTerm, filter } = useContext(ProductContext);

    // Filter products based on category, brand, search term, and additional filters
    

  

    const filteredProducts = products.filter(
        (product) => 
            (!category || product.category === Number(category)) &&
            (!brand || product.brand === Number(brand)) &&
            (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    

    return (
        <div className="row">
            {filteredProducts.map((product) => (
                <div className="col-md-3 mb-4" key={product.id}>
                    <Card className="h-100">
                        <div
                            style={{
                                height: "200px",
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={`http://localhost:9999/images/${product.image}`}
                                alt={product.title}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> ${product.price}
                            </Card.Text>
                            <Card.Text>
                                <strong>Discount:</strong> {product.discountPercentage}%
                            </Card.Text>
                            <Card.Text>
                                <strong>New Price:</strong> $
                                {(
                                    product.price -
                                    (product.price * product.discountPercentage) / 100
                                ).toFixed(2)}
                            </Card.Text>
                            <Button
                                variant="primary"
                                className="mt-auto"
                                onClick={() => window.location.href = `/product/${product.id}`}
                            >
                                View Details
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
