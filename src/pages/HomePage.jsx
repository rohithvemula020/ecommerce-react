import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Homepage.css'
import Baz from './Sliders';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
      <nav>
        {/* Navbar content */}
        <div className="banner">
        <img src="./src/assets/banner.avif" alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h2>Welcome to Our Store</h2>
          <p>Discover amazing products for your needs.</p>
          <Link to="/products" className="shop-now-button">Shop Now</Link>
        </div>
      </div>
      </nav>
      <Baz/>
      <Baz/>
      <Footer/>
      


    </div>
  );
};

export default Homepage;

