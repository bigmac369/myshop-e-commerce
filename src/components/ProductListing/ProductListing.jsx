import Product from "../Product/Product";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const allProducts = useSelector((state) => state.product.products);
  console.log(allProducts);

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

  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* {Object.keys(finalisedProducts).map((title) => {
        const products = finalisedProducts[title];
      })} */}
      <Product />
    </div>
  );
};

export default ProductListing;
