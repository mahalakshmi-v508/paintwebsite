import React from "react";
import "./Dashboard.css";
import Sidebar from "./sidebar/sideBar";  // Ensure correct path
import AdminHeader from "./adminHeader/adminHeader"; // Ensure correct path

// Product Data
const products = [
  { id: 1, name: "Tea cup", image: "images/teacup.png" },
  { id: 2, name: "Plate", image: "images/plate.png" },
  { id: 3, name: "Flower vase", image: "images/flowervase.png" },
  { id: 4, name: "Tea pot", image: "images/teapot.png" },
  { id: 5, name: "Bowl", image: "images/bowl.png" },
  { id: 6, name: "Spoon", image: "images/spoon.png" },
];

const Dashboard = () => {                                                               
  return (
    <div className="dashboard">
      <div className="dashboard-main-content">
        <AdminHeader />
      </div>
      <div className="dashboard-main-content1">
      {/* Sidebar */}
      <div>
      <Sidebar />
      </div>
      {/* Main Dashboard Content */}
      <div className="dashboard-container">
        {/* Product Grid */}
        <div className="dashboard-product-grid">
          {products.map((product) => (
            <div className="dashboard-product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="dashboard-product-image"
              />
              <p className="dashboard-product-name">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
