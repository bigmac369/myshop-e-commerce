import Product from "../Product/Product";
import { Routes, Route } from "react-router-dom";

const ProductListing = () => {
  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Product />
    </div>
  );
};

export default ProductListing;
