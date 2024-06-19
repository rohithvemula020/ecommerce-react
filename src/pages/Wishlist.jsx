import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/Slices/favoritesSlice";
import { useSnackbar } from "notistack";
import { Favorite } from "@mui/icons-material";
import { add } from "../redux/Slices/cartSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const toggleFavorite = (item) => {
    dispatch(removeFromFavorites(item.id));
    enqueueSnackbar(`Item removed from your favorites`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const addToCart = (item) => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mt-6">Your Wishlist</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {favorites.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500">No items in your wishlist.</p>
            <Link to={"/products"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        ) : (
          favorites.map((item) => (
            <div
              key={item.id}
              className="group hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] m-5 rounded-xl"
            >
              <div className="h-[180px] w-full">
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
                <button
                  className="group-hover:bg-pink-700 group-hover:text-white transition-colors duration-300 ease-in-out text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-2"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
                <div className="flex items-center space-x-2">
                  <p className="text-gray-700 font-semibold">${item.price}</p>
                  <button onClick={() => toggleFavorite(item)} className="focus:outline-none">
                    <Favorite className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;

