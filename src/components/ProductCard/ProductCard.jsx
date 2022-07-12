import React from "react";
import { Link, useParams } from "react-router-dom";
import { addItemToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  // console.log(category);
  // console.log(product);
  // const handleAddToCart = (product) => {
  //   dispatch(addItemToCart(product));
  // };
  const { title, price, image, id } = product;
  const modifiedTitle =
    title.length > 30 ? `${title.substring(0, 40)}...` : title;
  return (
    <div className="border border-gray-300 rounded-md bg-red-100">
      <Link to={`/shop/${category}/${id}`}>
        <img
          className="h-[300px] w-full rounded-md cursor-pointer"
          src={image}
          alt={title}
        />

        <div className="flex justify-between">
          <h2 className="basis-3/4 min-h-[80px] p-2">{modifiedTitle}</h2>
          <p className="p-2">${price}</p>
        </div>
      </Link>
      {/* <div
        onClick={() => handleAddToCart(product)}
        className="bg-orange-400 py-4 rounded-md cursor-pointer"
      >
        <h2 className="text-center">ADD TO CART</h2>
      </div> */}
    </div>
  );
};

export default ProductCard;
