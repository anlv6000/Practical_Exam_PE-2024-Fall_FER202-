import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState(""); 
  const [brand, setBrand] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filter, setFilter] = useState({ inStock: false, onSale: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await axios.get("http://localhost:9999/product");
        setProducts(productsRes.data);

        const categoriesRes = await axios.get("http://localhost:9999/category");
        setCategories(categoriesRes.data);

        const brandsRes = await axios.get("http://localhost:9999/brand");
        setBrands(brandsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await axios.post('http://localhost:9990/product', {
        ...product,
        id: (products.length + 1).toString(),
        brandId: Number(product.brandId),
        categoryId: Number(product.categoryId),
        price: Number(product.price),
        discountPercentage: Number(product.discountPercentage),
        rating: Number(product.rating),
        stock: Number(product.stock),
      });
    setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        brands,
        category,
        setCategory, 
        brand,
        setBrand,
        searchTerm,
        setSearchTerm,
        filter,
        setFilter,
        addProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
