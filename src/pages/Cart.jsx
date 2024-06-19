import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/Slices/cartSlice";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-between p-2">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-semibold text-lg text-purple-800">
                YOUR CART SUMMARY
              </h1>
              <p>
                <span className="text-gray-700 font-semibold">Total Items</span> :{" "}
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p>
                <span className="text-gray-700 font-semibold">Total Amount</span> : $
                {totalAmount}
              </p>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                Checkout Now
              </button>
              <button
                className="bg-red-500 hover:bg-red-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-red-600 font-bold hover:text-red-700 p-3"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/products"}>
            <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
