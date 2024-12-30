import React, { useEffect, useState } from "react";
import "./interior.css";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../components/Context/CartContext";
import int1 from "../../../components/Images/img/Int 1.png";
import int2 from "../../../components/Images/img/Int 2.png";
import int3 from "../../../components/Images/img/Int 3.png";
import int4 from "../../../components/Images/img/Int 4.png";
import int5 from "../../../components/Images/img/Int 5.png";
import int6 from "../../../components/Images/img/Int 6.png";
import int7 from "../../../components/Images/img/Int 7.png";
import int8 from "../../../components/Images/img/Int 8.png";
import int9 from "../../../components/Images/img/Int 9.png";
import int10 from "../../../components/Images/img/Int 10.png";
import int11 from "../../../components/Images/img/Int 11.png";
import int12 from "../../../components/Images/img/Int 12.png";
// (import other images here)

const Interior = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const location = useLocation(); // Access the state passed through navigation

  const [productdetail, setProductDetail] = useState([
    {
      id: 1,
      name: "Elegant Interior Laminate",
      price: 1250,
      description: "Scratch-resistant and smooth finish for a polished look",
      image: int1,
    },
    {
      id: 2,
      name: "Luxury Wood Laminate",
      price: 1350,
      description: "Rich wood finish, heat-resistant and easy to maintain",
      image: int2,
    },
    {
      id: 3,
      name: "Velvet Glossy Paint",
      price: 1550,
      description: "Velvet smooth texture, glossy finish, perfect for modern interiors",
      image: int3,
    },
    {
      id: 4,
      name: "Eco Matte Paint",
      price: 1450,
      description: "Eco-friendly matte paint with a premium feel",
      image: int4,
    },
    {
      id: 5,
      name: "Industrial Oil Paint",
      price: 1650,
      description: "Tough, durable oil-based paint for industrial spaces",
      image: int5,
    },
    {
      id: 6,
      name: "Water-Based Eco Paint",
      price: 1400,
      description: "Water-based paint that dries quickly with minimal odor",
      image: int6,
    },
    {
      id: 7,
      name: "Wooden Finish Polish",
      price: 1750,
      description: "Restores shine and protects your wood surfaces from wear",
      image: int7,
    },
    {
      id: 8,
      name: "Metallic Rust-Resistant Paint",
      price: 1850,
      description: "Shiny metallic finish with rust-resistant properties for metals",
      image: int8,
    },
    {
      id: 9,
      name: "Primer for Smooth Finish",
      price: 1050,
      description: "High-quality primer for better adhesion and smoother surfaces",
      image: int9,
    },
    {
      id: 10,
      name: "Satin Touch Paint",
      price: 1700,
      description: "A soft satin finish that provides a premium look and feel",
      image: int10,
    },
    {
      id: 11,
      name: "Frosted Glass Effect Paint",
      price: 1550,
      description: "Create a frosted glass effect with a stylish paint finish",
      image: int11,
    },
    {
      id: 12,
      name: "Antique Wood Stain",
      price: 1600,
      description: "Gives a beautiful antique finish to wood with rich tones",
      image: int12,
    },

    // (other predefined products)
  ]);

  useEffect(() => {
    // Check if new product data was passed and add it to the list
    if (location.state && location.state.product) {
      setProductDetail((prevProducts) => [
        ...prevProducts,
        { ...location.state.product, id: prevProducts.length }, // Ensure unique id
      ]);
    }
  }, [location.state]);

  // Function to handle "Add to Cart"
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="paint-container">
      <div>
        <h1 style={{ textAlign: "center" }}>Interior Decorations</h1>
      </div>
      <div className="exterior-grid">
        {productdetail.map((product) => (
          <div key={product.id} className="paint-card">
            <img src={product.image} alt={product.name} className="luxury-image" />
            <div className="paint-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>
              <div className="buttons">
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interior;
