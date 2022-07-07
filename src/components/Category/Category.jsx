import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Category = () => {
  const { category } = useParams();
  // console.log(category);

  const modifiedProducts = useSelector(
    (state) => state.product.modifiedProducts
  );

  console.log(modifiedProducts);

  const [products, setProducts] = useState(modifiedProducts[category]);

  console.log(products);

  useEffect(() => {
    setProducts(modifiedProducts[category]);
  }, [category, modifiedProducts]);

  return (
    <>
      <h2 className="text-4xl text-center my-6">{category.toUpperCase()}</h2>
      <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
