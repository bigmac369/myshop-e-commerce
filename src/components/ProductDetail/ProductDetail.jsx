import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../features/productSlice";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { id, title, price, description, category, image } = product;

  const fetchProductDetail = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    console.log(data);
    dispatch(selectedProduct(data));
  };

  useEffect(() => {
    console.log("ran");
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="bg-[white] flex h-2/3 w-[60%]">
        <div className="h-full w-1/3 p-4">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <div className="bg-gray-300 w-2/3 p-6 flex flex-col">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="pt-6">{description}</p>
          <h2 className="pt-12 font-bold text-xl">${price}</h2>

          <div className="flex mt-auto bg-orange-400 w-fit ml-auto p-3 rounded-xl cursor-pointer">
            <AddShoppingCartIcon />
            <div className="font-medium ml-2">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
