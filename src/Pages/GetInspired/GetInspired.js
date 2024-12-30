import React from "react";
import { useParams } from "react-router-dom";
import "./GetInspired.css";
import bannerImage from "../../components/Images/GetInspired/getban.jpg";

const GetInspired = () => {
  const { section } = useParams();

  return (
    <div className="get-inspired-container">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Get Inspired" className="banner-image" />
        <div className="banner-content">
          <h1 className="banner-heading">A Multitude of Offerings</h1>
          <p className="banner-subtext">
            A wide range of shades, and the promise of quality.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="section-intro">
          <h2 className="section-title">Transform Your Space</h2>
          <p>
            Explore how {section ? section : "our designs"} can inspire your interiors and exteriors with vibrant colors.
            your interiors and exteriors with vibrant colors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInspired;