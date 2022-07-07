import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link, useParams } from "react-router-dom";
import { selectFetchedData } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const allProducts = useSelector(selectFetchedData);
  console.log(allProducts);

  const productList = allProducts.map(
    ({ id, title, price, image, category }) => {
      const modifiedTitle =
        title.length > 30 ? `${title.substring(0, 40)}...` : title;
      return (
        <Link key={id} to={`/shop/${category}/${id}`}>
          <div className="border border-gray-300 rounded-md bg-red-100">
            <img
              className="h-[300px] w-full rounded-md cursor-pointer"
              src={image}
              alt={title}
            />

            <div className="flex justify-between">
              <h2 className="basis-3/4 min-h-[80px] p-2">{modifiedTitle}</h2>
              <p className="p-2">${price}</p>
            </div>
            {/* <div className="bg-orange-400 py-4 rounded-md cursor-pointer">
          <h2 className="text-center">ADD TO CART</h2>
        </div> */}
          </div>
        </Link>
      );
    }
  );
  return <>{productList}</>;
};

export default Product;
