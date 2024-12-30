import React, { useEffect, useState } from "react";
import "./exterior.css";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../components/Context/CartContext";
import ext1 from "../../../components/Images/img/Ext 1.png";
import ext2 from "../../../components/Images/img/Ext 2.png";
import ext3 from "../../../components/Images/img/Ext 3.png";
import ext4 from "../../../components/Images/img/Ext 4.png";
import ext5 from "../../../components/Images/img/Ext 5.png";
import ext6 from "../../../components/Images/img/Ext 6.png";
// (import other images here)

const Exterior = () => {
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const location = useLocation(); // Access the state passed through navigation

  const [productdetail, setProductDetail] = useState([
    {
      id: 1,
      name: "R & L Exterior Laminate",
      price: 1200,
      description: "Dirtproof, waterproof, high UV resistance, and anti-algae properties",
      image: ext1,
    },
    {
      id: 2,
      name: "M & R Interior Laminate",
      price: 1100,
      description: "Smooth finish, heat resistant, and long-lasting durability",
      image: ext2,
    },
    {
      id: 3,
      name: "Glossy Paint",
      price: 1500,
      description: "High gloss finish, easy to clean, and stain-resistant",
      image: ext3,
    },
    {
      id: 4,
      name: "Matte Paint",
      price: 1400,
      description: "Smooth matte finish, reduces light reflection, and scratch-resistant",
      image: ext4,
    },
    {
      id: 5,
      name: "Oil-Based Paint",
      price: 1600,
      description: "Durable and provides a protective layer for outdoor use",
      image: ext5,
    },
    {
      id: 6,
      name: "Water-Based Paint",
      price: 1300,
      description: "Low odor, quick drying, and environmentally friendly",
      image: ext6,
    },
    {
      id: 7,
      name: "Wood Finish Polish",
      price: 1700,
      description: "Provides a natural wood shine and protects from moisture",
      image: ext3,
    },
    {
      id: 8,
      name: "Anti-Rust Metal Paint",
      price: 1800,
      description: "Prevents rust, weather-resistant, and long-lasting finish",
      image: ext1,
    },
    {
      id: 9,
      name: "Primer Coating",
      price: 1000,
      description: "Ensures better paint adhesion and smooth coverage",
      image: ext2,
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
        <h1 style={{ textAlign: "center" }}>Exterior Decorations</h1>
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

export default Exterior;
