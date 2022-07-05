import React from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 h-16 flex justify-between items-center p-4 w-full sticky top-0 text-white">
        <div>
          <Link to="/">
            <h1 className="cursor-pointer">myShop</h1>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link className="mr-6" to="shop">
            SHOP
          </Link>
          <Link to="/signup">SIGN IN</Link>
          <CartIcon />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
