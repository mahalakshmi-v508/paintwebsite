import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./HomePage.css";

import zebraImage from "../Images/pandaa.png"; // Corrected path
import image1 from "../Images/images1.png";
import image2 from "../Images/images2.png";
import image3 from "../Images/images3.png";
import image4 from "../Images/images4.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
      </header>

      {/* Carousel component replacing Slider */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000} className="carousel">
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
        <div>
          <img src={image4} alt="Slide 4" />
        </div>
      </Carousel>

      <main className="form-container">
  <h1>Get In Touch</h1>
  <div className="paintform">
    <form className="contact-form">
      <div className="form-row">
        <input type="text" placeholder="Name*" required />
        <input type="text" placeholder="Mobile Number*" required />
        <input type="email" placeholder="Email Id*" required />
      </div>
      <div className="form-row">
        <select required>
          <option value="">State*</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
        </select>
        <select required>
          <option value="">City*(Select the city closer to you)</option>
          <option value="Aurangabad">Aurangabad</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        <select required>
          <option value="">Contacting us for*</option>
          <option value="query">Query</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
      <input type="checkbox" required />
      <label>I'm not a robot</label>
      <div className="formsubmit">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
    <img src={zebraImage} alt="Zebra" className="zebra-image" />
  </div>
</main>    </div>
  );
};

export default HomePage;