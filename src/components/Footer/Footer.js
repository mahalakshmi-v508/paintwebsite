import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h2>Looking For More?</h2>
        <p>
          Subscribe to our newsletter. Get latest updates, paint inspiration &
          advice delivered directly to your inbox.
        </p>
        <div className="subscribe-container">
          <input type="email" placeholder="Your Email" className="email-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Brand Story</li>
            <li>Philosophy</li>
            <li>Media</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>Interior Emulsions</li>
            <li>Exterior Emulsions</li>
            <li>Waterproofing Solutions</li>
            <li>Enamels</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Other Products</h3>
          <ul>
            <li>Putty and Primers</li>
            <li>Sleek Wood Coatings</li>
            <li>Private Label</li>
            <li>Other Products</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get Inspired</h3>
          <ul>
            <li>Blogs</li>
            <li>Trending Colour Combinations</li>
            <li>Sustainability</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 SAP Paints. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;