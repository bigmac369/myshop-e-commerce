import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const productList = products.map(
    ({ id, title, description, price, image }) => {
      const modifiedTitle =
        title.length > 30 ? `${title.substring(0, 40)}...` : title;
      return (
        <div key={id} className="border border-gray-300 rounded-md bg-red-100">
          <Link to="/">
            <img
              className="h-[300px] w-full rounded-md cursor-pointer"
              src={image}
              alt={title}
            />
          </Link>

          <div className="flex justify-between">
            <h2 className="basis-3/4 min-h-[80px] p-2">{modifiedTitle}</h2>
            <p className="p-2">${price}</p>
          </div>
          <div className="bg-orange-400 py-4 rounded-md cursor-pointer">
            <h2 className="text-center">ADD TO CART</h2>
          </div>
        </div>
      );
    }
  );
  return <>{productList}</>;
};

export default Product;
