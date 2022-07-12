import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decreaseFromCart,
  addItemToCart,
  clearCart,
  getTotalItems,
  getTotalAmount,
} from "../../features/cartSlice";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    console.log("ran!");
    dispatch(getTotalItems());
    dispatch(getTotalAmount());
  }, [cartItems, cartTotalAmount]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseFromCart = (item) => {
    dispatch(decreaseFromCart(item));
  };

  const handleIncreaseToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container py-8 px-16">
      <h2 className="font-normal text-3xl text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty text-[20px] mt-[2rem] text-[rgb(84,84,84)] flex flex-col items-center">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <KeyboardBackspaceIcon />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles mt-8 mb-4 grid items-center grid-cols-6 gap-x-2 pl-2">
            <h3 className="product-title text-sm font-normal uppercase col-span-3">
              Product
            </h3>
            <h3 className="price uppercase text-sm font-normal">Price</h3>
            <h3 className="quantity uppercase text-sm font-normal">Quantity</h3>
            <h3 className="total uppercase text-sm font-normal pr-2 justify-self-end">
              Total
            </h3>
          </div>

          <div className="cart-items">
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="cart-item grid items-center grid-cols-6 gap-x-2 border-t-[1px] border-[#bbbbbb] py-4"
              >
                <div className="card-product flex col-span-3">
                  <img
                    className="w-[100px] max-w-[100%] mr-4"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <h3 className="font-normal">name</h3>
                    <p>description</p>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="border-none outline-none mt-[0.7rem] cursor-pointer bg-none text-gray-500 hover:text-black"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-price">{item.price}</div>
                <div className="cart-product-quantity flex items-start justify-center w-[130px] max-w-full border-solid border-[0.5px] border-[rgb(177,177,177)] rounded-[5px]">
                  <button
                    onClick={() => handleDecreaseFromCart(item)}
                    className="border-none outline-none bg-none py-[0.7rem] px-[1.5rem] cursor-pointer"
                  >
                    -
                  </button>
                  <div className="count py-[0.7rem]">{item.cartQuantity}</div>
                  <button
                    onClick={() => handleIncreaseToCart(item)}
                    className="border-none outline-none bg-none py-[0.7rem] px-[1.5rem] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div className="cart-product-total-price justify-self-end pr-[0.5rem] font-bold">
                  ${(item.price * item.cartQuantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary flex justify-between items-start border-solid border-t-[1px] border-[rgb(187,187,187)] pt-[2rem]">
            <button
              onClick={() => handleClearCart()}
              className="clear-cart w-[130px] max-w-full h-[40px] rounded-[5px] font-normal tracking-[1.15px] border-solid border-[0.5px] border-[rgb(177,177,177)] text-gray-400 bg-none outline-none cursor-pointer"
            >
              Clear Cart
            </button>
            <div className="cart-checkout w-[270px] w-max-full">
              <div className="sub-total flex justify-between text-[20px]">
                <span>Subtotal</span>
                <span className="amount font-bold">
                  ${cartTotalAmount.toFixed(2)}
                </span>
              </div>
              <p className="text-[14px] font-extralight my-[0.5rem]">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full h-[40px] rounded-[5px] font-normal border-none outline-none cursor-pointer bg-[#4b70e2] text-white tracking-[1.15px]">
                Checkout
              </button>
              <div className="mt-4">
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  <KeyboardBackspaceIcon />
                  <span className="ml-[0.5rem]">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
