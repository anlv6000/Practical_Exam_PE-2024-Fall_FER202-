import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CategoryFilter = () => {
    const { categories, category, setCategory } = useContext(ProductContext);

    const handleCategoryChange = (e) => {
        const value = e.target.value === "all" ? null : parseInt(e.target.value);
        setCategory(value);
    };

    return (
        <div>
            <h5>Categories</h5>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    value="all"
                    checked={category === null}
                    onChange={handleCategoryChange}
                />
                <label className="form-check-label">All Categories</label>
            </div>
            {categories.map((cat) => (
                <div className="form-check" key={cat.id}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={Number(category) === cat.id}
                        onChange={handleCategoryChange}
                    />
                    <label className="form-check-label">{cat.name}</label>
                </div>
            ))}
        </div>
    );
};

export default CategoryFilter;
