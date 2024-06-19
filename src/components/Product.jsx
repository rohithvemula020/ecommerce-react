

import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { addToFavorites, removeFromFavorites } from "../redux/Slices/favoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Product = ({ item }) => {
  const { cart, favorites } = useSelector((state) => ({
    cart: state.cart,
    favorites: state.favorites.favorites,
  }));
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const toggleFavorite = () => {
    if (favorites.some((p) => p.id === item.id)) {
      dispatch(removeFromFavorites(item.id));
      enqueueSnackbar(`Item removed from your favorites`, {
        variant: "warning",
        autoHideDuration: 3000,
      });
    } else {
      dispatch(addToFavorites(item));
      enqueueSnackbar(`Item added to your favorites`, {
        variant: "success",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] mt-10 ml-5 rounded-xl">
      <div className="h-[160px] w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-3">
        <h1 className="truncate w-full text-center text-gray-700 font-semibold text-lg">
          {item.title}
        </h1>
      </div>
      <div className="flex items-center justify-between w-full mt-3 space-x-2">
        {cart.some((p) => p.id === item.id) ? (
          <button
            className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
        <div className="flex items-center space-x-2">
          <p className="text-gray-700 font-semibold">${item.price}</p>
          <button onClick={toggleFavorite} className="focus:outline-none">
            {favorites.some((p) => p.id === item.id) ? (
              <Favorite className="text-red-500" />
            ) : (
              <FavoriteBorder className="text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
