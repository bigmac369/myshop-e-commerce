import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../features/productSlice";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const { id, title, price, description, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    console.log(data);

    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{price}</p>
      <h6>{category}</h6>
    </div>
  );
};

export default ProductDetail;
