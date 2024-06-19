import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to="/">
          <div className="ml-5">
            <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
              SHOPSY SHOP
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 font-semibold">
          <Link to="/">
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Home
            </li>
          </Link>
          <Link to="/products">
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Products
            </li>
          </Link>
          <Link to="/wishlist">
            <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
              Wishlist
            </li>
          </Link>
          <Link to="/cart">
            <div className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />
              {cart.length > 0 && (
                <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
