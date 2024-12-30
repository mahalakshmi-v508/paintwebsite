import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { type } = useParams();
  return <div>Showing {type} products</div>;
};

export default Products;
