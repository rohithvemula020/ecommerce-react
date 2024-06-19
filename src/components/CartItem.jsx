import React from "react";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { increment, decrement, remove } from "../redux/Slices/cartSlice";
import { useSnackbar } from "notistack";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  const incrementItem = () => {
    dispatch(increment(item.id));
  };

  const decrementItem = () => {
    dispatch(decrement(item.id));
  };

  return (
    <div className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img src={item.image} className="h-28 rounded-lg" alt="" />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-purple-700 font-semibold">
            {item.title}
          </h1>
          <p>${item.price}</p>
          <div className="flex items-center">
            <button
              onClick={decrementItem}
              className="bg-red-500 px-3 mx-1 py-1 rounded-l-lg"
            >
              -
            </button>
            <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
            <button
              onClick={incrementItem}
              className="bg-green-500  mx-1 px-3 py-1 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={removeItemFromCart}
        className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
      >
        <Delete className="text-gray-800" />
      </div>
    </div>
  );
};

export default CartItem;

