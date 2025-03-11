import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const BrandFilter = () => {
    const { brands, brand, setBrand } = useContext(ProductContext);
    const handleBrandChange = (e) => {
        const value = e.target.value === "all" ? null : parseInt(e.target.value);
        setBrand(value);
    };
    return (
        <div>
            <h5>Brands</h5>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    value="all"
                    checked={Number(brand) === null}
                    onChange={handleBrandChange}
                />
                <label className="form-check-label">All Brands</label>
            </div>
            {brands.map((b) => (
                <div className="form-check" key={b.id}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="brand"
                        value={b.id}
                        checked={Number(brand) === b.id}
                        onChange={(e) => setBrand(e.target.value)} // Cập nhật state brand
                    />
                    <label className="form-check-label">{b.name}</label>
                </div>
            ))}
        </div>
    );
};

export default BrandFilter;
