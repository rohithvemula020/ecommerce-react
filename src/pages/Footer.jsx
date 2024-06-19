import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <div>
      <footer className=" text-white text-center text-lg-start" style={{backgroundColor:'lavender'}}>
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-dark">Shopsy</h5>

              <p className='text-dark'>
                Shopsy is your one-stop destination for all your shopping needs. Browse through our wide range of products and find exactly what you're looking for.
              </p>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-dark">Links</h5>

              <ul className="list-unstyled mb-0 text-dark">
                <li>
                  <a href="#!" className="text-dark">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Shop</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">About Us</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0 text-dark">Social Media</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} Shopsy | All rights reserved
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
