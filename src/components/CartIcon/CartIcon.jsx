import React from "react";
import { BsCart } from "react-icons/bs";

const CartIcon = () => {
  return (
    <div className="relative ml-4 cursor-pointer">
      <BsCart size={35} />
      <span className="absolute top-2 left-3 text-xs">2</span>
    </div>
  );
};

export default CartIcon;
