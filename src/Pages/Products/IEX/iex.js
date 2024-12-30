import React from "react";
import "./iex.css";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../../../components/Context/CartContext";
import pt1 from "../../../components/Images/img/paint 1.png";
import pt2 from "../../../components/Images/img/paint 2.png";
import pt3 from "../../../components/Images/img/paint 3.png";
import pt4 from "../../../components/Images/img/paint 4.png";
import pt5 from "../../../components/Images/img/paint 5.png";
import pt6 from "../../../components/Images/img/paint 6.png";
import pt7 from "../../../components/Images/img/paint 7.png";
import pt8 from "../../../components/Images/img/paint 8.png";
import pt9 from "../../../components/Images/img/paint 9.png";
import pt10 from "../../../components/Images/img/paint 10.png";
import pt11 from "../../../components/Images/img/paint 11.png";
import pt12 from "../../../components/Images/img/paint 12.png";
import pt13 from "../../../components/Images/img/paint 13.png";
import pt14 from "../../../components/Images/img/paint 14.png";
import pt15 from "../../../components/Images/img/paint 15.png";

const Iex = () => {
//   const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart from CartContext

  const productdetail = [
    // Interior Products (7 products)
    
      {
        id: 10,
        name: "Exterior Wood Polish",
        price: 1500,
        description: "Protects and enhances the natural beauty of wood in exterior spaces.",
        image: pt10,
      },
      {
        id: 11,
        name: "UV Protection Exterior Laminate",
        price: 1700,
        description: "High UV resistance, keeping outdoor surfaces safe from sun damage.",
        image: pt11,
      },
      {
        id: 12,
        name: "Anti-Mold Outdoor Paint",
        price: 1800,
        description: "Protects against mold and mildew growth on exterior walls and surfaces.",
        image: pt12,
      },
      {
        id: 13,
        name: "Outdoor Matte Finish Paint",
        price: 1600,
        description: "Ideal for a soft matte finish for outdoor walls and features.",
        image: pt13,
      },
      {
        id: 14,
        name: "High-Gloss Exterior Paint",
        price: 1750,
        description: "For a shiny, glossy finish to enhance outdoor features and furniture.",
        image: pt14,
      },
      {
        id: 15,
        name: "Anti-Rust Steel Coating",
        price: 1900,
        description: "Prevents rust on steel surfaces and provides long-lasting protection.",
        image: pt15,
      },
  
    {
      id: 1,
      name: "Smooth Matte Laminate",
      price: 1300,
      description: "Provides a sleek matte finish with high resistance to scratches.",
      image: pt1,
    },
    {
      id: 2,
      name: "Textured Laminate",
      price: 1250,
      description: "Adds depth to walls with a beautiful, textured finish.",
      image: pt2,
    },
    {
      id: 3,
      name: "Soft Touch Paint",
      price: 1400,
      description: "Soft feel and smooth finish, ideal for bedrooms and living rooms.",
      image: pt3,
    },
    {
      id: 4,
      name: "Luxury Glossy Paint",
      price: 1500,
      description: "Perfect for a shiny, glossy look in your living spaces.",
      image: pt4,
    },
    {
      id: 5,
      name: "Neutral Grey Paint",
      price: 1200,
      description: "A versatile grey that suits all kinds of interior decor.",
      image: pt5,
    },
    {
      id: 6,
      name: "Premium Wood Finish",
      price: 1700,
      description: "High-quality finish for wooden surfaces, protecting them from wear and tear.",
      image: pt6,
    },
    {
      id: 7,
      name: "Matte White Finish",
      price: 1300,
      description: "A sophisticated matte white that adds elegance to any room.",
      image: pt7,
    },
  
    // Exterior Products (8 products)
    {
      id: 8,
      name: "Rustproof Outdoor Laminate",
      price: 1450,
      description: "Ideal for outdoor furniture, with rustproof features and durability.",
      image: pt8,
    },
    {
        id: 9,
        name: "Weatherproof Paint",
        price: 1600,
        description: "Protects surfaces from harsh weather conditions, rain, and UV damage.",
        image: pt9,
      },
  ];
  
  // Function to handle "Add to Cart"
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="paint-container">
      <div>
        <h1 style={{ textAlign: "center" }}> Exterior & Interior Emulsions</h1>
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

export default Iex;
