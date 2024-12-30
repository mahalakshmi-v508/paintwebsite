import React, { useState } from "react";
import "./CartPage.css";
import { useCart } from "../../components/Context/CartContext"; 
// import Header from "../Header/Header";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    quantity: 1,
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      quantity: 1, // Reset quantity to 1 when opening the dialog
    });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (operation) => {
    setFormData((prevData) => ({
      ...prevData,
      quantity:
        operation === "increase"
          ? prevData.quantity + 1
          : Math.max(1, prevData.quantity - 1), // Prevent quantity from going below 1
    }));
  };

  const handleSubmitOrder = () => {
    const totalPrice = formData.quantity * selectedProduct.price;
    console.log("Order Details: ", {
      ...formData,
      product: selectedProduct,
      totalPrice,
    });

    // Simulate order success
    setOrderSuccess(true);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      quantity: 1,
    });

    // Close the dialog box
    handleCloseDialog();
  };

  const calculateTotalPrice = () => {
    return selectedProduct ? selectedProduct.price * formData.quantity : 0;
  };

  return (
    <>
    {/* <Header/> */}
    <div className="paint-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="exterior-grid">
          {cart.map((item) => (
            <div className="paint-card" key={item.name}>
              <img src={item.image} alt={item.name} className="luxury-image" />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={() => removeFromCart(item.name)}>
                  Remove
                </button>
                <button className="add-to-cart" onClick={() => handleBuyClick(item)}>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Buy Dialog */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Enter your details to complete the order</h2>

            {/* Order Form */}
            <div className="order-form">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />

              {/* Quantity Adjustment */}
              <div className="quantity-adjust">
                <button onClick={() => handleQuantityChange("decrease")}>-</button>
                <input type="number" value={formData.quantity} readOnly />
                <button onClick={() => handleQuantityChange("increase")}>+</button>
              </div>

              {/* Display Total Price */}
              <p>Total Price: ₹{calculateTotalPrice()}</p>

              <div className="buttons">
                <button className="add-to-cart" onClick={handleSubmitOrder}>
                  Submit Order
                </button>
                <button className="add-to-cart" onClick={handleCloseDialog}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Success Popup */}
      {orderSuccess && (
        <div className="success-popup">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order! We will process it soon.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
