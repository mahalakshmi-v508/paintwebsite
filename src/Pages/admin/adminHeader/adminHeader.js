import React from "react";
import "./adminHeader.css";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <h1>Products</h1>
      <div className="admin-actions">
        <button className="admin-default-button">Export Products</button>
        <button className="admin-default-button">Import Products</button>
        <button className="admin-default-button">Add Product</button>
      </div>
    </div>
  );
};

export default AdminHeader;
