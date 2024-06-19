import HomePage from "./pages/HomePage";
import React from "react";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route exact path="/products" element={<ProductsPage/>} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
