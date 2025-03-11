import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductProvider from "./context/ProductContext";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddProductPage from "./pages/AddProductPage"; // Import the AddProductPage

const App = () => {
    return (
        <ProductProvider>
            <Router>
                <nav align="center" className="my-4"> 
                    
                       
                            <Button as={Link} to="/" variant="primary" className="me-2">Home</Button>
                        
                            <Button as={Link} to="/add-product" variant="primary" className="me-2">Add Product</Button>
                        
                    
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/add-product" element={<AddProductPage />} /> {/* Add the new route */}
                </Routes>
            </Router>
        </ProductProvider>
    );
};

export default App;
