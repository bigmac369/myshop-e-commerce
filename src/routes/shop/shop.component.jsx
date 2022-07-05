import React, { useEffect } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";
import Category from "../../components/Category/Category";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchProduct } from "../../features/productSlice";

const Shop = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    dispatch(fetchProduct(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Routes>
      <Route index element={<ProductListing />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

{
  /* <div className="flex justify-center mt-6">
  <ProductListing />
</div>; */
}
