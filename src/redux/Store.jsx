import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/redux/Slices/cartSlice";
import favoritesReducer from './Slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer
  },
});
