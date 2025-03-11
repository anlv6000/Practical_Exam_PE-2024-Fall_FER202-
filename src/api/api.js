import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:9999",
});

export const getProducts = () => API.get("/product");
export const getCategories = () => API.get("/category");
export const getBrands = () => API.get("/brand");
export const deleteProduct = (id) => API.delete(`/product/${id}`);
export const getProductById = (id) => API.get(`/product/${id}`);
