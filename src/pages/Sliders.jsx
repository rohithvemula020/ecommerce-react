import React from "react";
import ReactCardSlider from "react-card-slider-component";

// Import images from local folder
import image1 from '/src/assets/image1.avif';
import image2 from '/src//assets/image2.avif';
import image3 from '/src/assets/image3.avif';
import image4 from '/src/assets/image4.avif';
import image5 from '/src/assets/image5.avif';
import image6 from '/src/assets/image6.avif';
import image7 from '/src/assets/image7.avif';

// Define a default click event function
const defaultClickEvent = (title) => {
  console.log(`${title} card clicked!`);
};

const slides = [
  {
    image: image1,
    title: "Premium Shirts",
    description: "Make Yourself stylish with premium shirts",
    clickEvent: () => defaultClickEvent("This is a title")
  },
  {
    image: image2,
    title: "Summer Collection",
    description: "Don't Shiver Summer Collection is Here",
    clickEvent: () => defaultClickEvent("This is a second title")
  },
  {
    image: image3,
    title: "Gold Rings",
    description: "Add luxeries show to your fingers",
    clickEvent: () => defaultClickEvent("This is a third title")
  },
  {
    image: image4,
    title: "Platinum Links",
    description: "Platinum Adds Beauty to Your Life ",
    clickEvent: () => defaultClickEvent("This is a fourth title")
  },
  {
    image: image5,
    title: "SD Cards",
    description: "Store and Share Your Memories With me ",
    clickEvent: () => defaultClickEvent("This is a fifth title")
  },
  {
    image: image6,
    title: "Televisions",
    description: "Add Entertainment To Your Life",
    clickEvent: () => defaultClickEvent("This is a sixth title")
  },
  {
    image: image7,
    title: "Raincoats",
    description: "Enjoy Rainrides noww without fear",
    clickEvent: () => defaultClickEvent("This is a seventh title")
  }
];

const Baz = () => {
  return (
    <div style={{ marginTop: "5em", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "80%" }}>
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default Baz;
