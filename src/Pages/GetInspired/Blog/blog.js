import React from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";

// Import images for each event
import banner from "../../../components/Images/Blog/blog banner/blog ban.jpg"; // Add a banner image
import two from "../../../components/Images/Blog/festivals/fes1.jpg";
import three from "../../../components/Images/Blog/living/living1.jpg";
import four from "../../../components/Images/Blog/kits/kit1.jpg";
import five from "../../../components/Images/Blog/exterior/ex1.jpg";
import six from "../../../components/Images/Blog/kitchen/kitchan1.jpg";
import seven from "../../../components/Images/Blog/study/blog21.jpg";

function Blog() {
  const navigate = useNavigate();

  // Navigation handlers
  const handleStage = () => navigate("/festival");
  const handleFlower = () => navigate("/living");
  const handleMehandi = () => navigate("/kids");
  const handlePhoto = () => navigate("/blogexterior");
  const handleMusic = () => navigate("/kitchen");
  const handleCakes = () => navigate("/study");

  return (
    <div className="events-container">
      {/* Banner Image */}
      <div className="banner-container">
        <img src={banner} alt="Blog Banner" className="blog-banner" />
        <div className="banner-text">
          <h1>Welcome to Our Room Colors</h1>
          {/* <p>Find the best paints and inspirations for your home.</p> */}
        </div>
      </div>

      {/* Blog Header */}
      <div className="events-header">
        {/* <h1>Our Room Colours</h1> */}
      </div>

      {/* Blog Grid */}
      <div className="events-grid">
        {/* Festivals */}
        <div className="event-card">
          <img src={two} alt="Festivals Decoration" className="event-image" />
          <div className="event-details">
            <h2>Festivals Decoration</h2>
            <button className="event-button" onClick={handleStage}>
              More
            </button>
          </div>
        </div>

        {/* Living Room */}
        <div className="event-card">
          <img src={three} alt="Living Room Paints" className="event-image" />
          <div className="event-details">
            <h2>Living Room Paints</h2>
            <button className="event-button" onClick={handleFlower}>
              More
            </button>
          </div>
        </div>

        {/* Kids Room */}
        <div className="event-card">
          <img src={four} alt="Kids Room Paints" className="event-image" />
          <div className="event-details">
            <h2>Kids Room Paints</h2>
            <button className="event-button" onClick={handleMehandi}>
              More
            </button>
          </div>
        </div>

        {/* Exterior Paints */}
        <div className="event-card">
          <img src={five} alt="Exterior Paints" className="event-image" />
          <div className="event-details">
            <h2>Exterior Paints</h2>
            <button className="event-button" onClick={handlePhoto}>
              More
            </button>
          </div>
        </div>

        {/* Kitchen */}
        <div className="event-card">
          <img src={six} alt="Kitchen Paints" className="event-image" />
          <div className="event-details">
            <h2>Kitchen Room Paints</h2>
            <button className="event-button" onClick={handleMusic}>
              More
            </button>
          </div>
        </div>

        {/* Study Room */}
        <div className="event-card">
          <img src={seven} alt="Study Room Paints" className="event-image" />
          <div className="event-details">
            <h2>Study Room</h2>
            <button className="event-button" onClick={handleCakes}>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
