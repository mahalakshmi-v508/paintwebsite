import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/sideBar"; // Sidebar component
import AdminHeader from "./adminHeader/adminHeader"; // Admin Header component
import "./adminProducts.css";

const AdminProducts = () => {
  const navigate = useNavigate(); // Navigation hook
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState(""); // Dropdown value
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });

  // Handle drag-and-drop or file selection
  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle product input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  // Handle form submission and navigate
  const handleSubmit = () => {
    if (!category) {
      alert("Please select a category!");
      return;
    }

    const product = {
      image: selectedImage,
      ...productDetails,
    };

    // Simulate adding product (pass product as state)
    if (category === "interior") {
      navigate("/products/interior", { state: { product } });
    } else if (category === "exterior") {
      navigate("/products/exterior", { state: { product } });
    } else if (category === "both") {
      navigate("/both", { state: { product } });
    }
  };

  return (
    <div className="dashboard">
      {/* Admin Header */}
      <AdminHeader />

      <div className="dashboard-content">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="dashboard-main">
          <h1>Upload and Add Product</h1>

          {/* Drag-and-Drop Area */}
          <div
            className="upload-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleImageUpload}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="uploaded-image"
              />
            ) : (
              <p>Drag & Drop image here or click to upload</p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
          </div>

          {/* Dropdown for Category */}
          <div className="dropdown-section">
            <label>Choose Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="interior">Interior</option>
              <option value="exterior">Exterior</option>
              <option value="both">Interior & Exterior</option>
            </select>
          </div>

          {/* Product Details Form */}
          <div className="product-form">
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              value={productDetails.name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Product Price"
              name="price"
              value={productDetails.price}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Product Description"
              name="description"
              value={productDetails.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit} className="submit-button">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
