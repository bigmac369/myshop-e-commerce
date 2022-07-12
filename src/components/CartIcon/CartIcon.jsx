import React from "react";
import { BsCart } from "react-icons/bs";
import { selectCartTotalQuantity } from "../../features/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const cartCount = useSelector(selectCartTotalQuantity);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div onClick={goToCheckoutHandler} className="relative ml-4 cursor-pointer">
      <BsCart size={35} />
      <span className="absolute top-2 left-3 text-xs">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
