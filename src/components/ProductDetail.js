import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:9999/product/${id}`);
            setProduct(res.data);
        };
        fetchProduct();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Do you want to delete this product?");
        if (confirmDelete) {
            await axios.delete(`http://localhost:9999/product/${id}`);
            navigate("/", { replace: true });
            window.location.reload();
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container my-4">
            <div style={{ textAlign: "center" }}>
                <img
                    src={`http://localhost:9999/images/${product.image}`}
                    alt={product.title}
                    style={{
                        width: "300px", // Đặt kích thước ảnh cố định
                        height: "auto", // Giữ tỷ lệ ảnh
                        marginBottom: "20px",
                    }}
                />
            </div>
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>
                    <strong>Price:</strong> ${product.price}
                </p>
                <p>
                    <strong>Discount:</strong> {product.discountPercentage}%
                </p>
                <p>
                    <strong>New Price:</strong> $
                    {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                </p>
                <p>
                    <strong>Rating:</strong> {product.rating}
                </p>
                <p>
                    <strong>Stock:</strong> {product.stock}
                </p>
                <div>
                    <button
                        className="btn btn-secondary me-2"
                        onClick={() => navigate("/")}
                    >
                        Back to List
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
