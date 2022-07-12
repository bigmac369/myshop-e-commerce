import React, { useEffect } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";
import Category from "../../components/Category/Category";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { fetchProduct } from "../../features/productSlice";
import { getModifiedProducts } from "../../features/productSlice";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const Shop = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    dispatch(fetchProduct(data));

    const allProducts = data;

    const menProducts = allProducts.filter((product) => {
      return product.category === "men's clothing";
    });

    const womenProducts = allProducts.filter((product) => {
      return product.category === "women's clothing";
    });

    const electronicsProducts = allProducts.filter((product) => {
      return product.category === "electronics";
    });

    const jeweleryProducts = allProducts.filter((product) => {
      return product.category === "jewelery";
    });

    const finalisedProducts = {
      mens: menProducts,
      womens: womenProducts,
      electronics: electronicsProducts,
      jewelery: jeweleryProducts,
    };

    dispatch(getModifiedProducts(finalisedProducts));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Routes>
      <Route index element={<ProductListing />} />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:productId" element={<ProductDetail />} />
    </Routes>
  );
};

export default Shop;
