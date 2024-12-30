import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import panda from "../Images/panda.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (section) => {
    setDropdownOpen((prev) => (prev === section ? null : section));
  };

  return (
    <header className="header">
      {/* Top Section */}
      <div className="header-top">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={panda} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            {/* Products Dropdown */}
            <li onClick={() => toggleDropdown("products")}>
              Products{" "}
              <FontAwesomeIcon
                icon={dropdownOpen === "products" ? faChevronUp : faChevronDown}
                className="arrow"
              />
              {dropdownOpen === "products" && (
                <div className="dropdown">
                  <Link to="/interior">Interior Emulsions</Link>
                  <Link to="/exterior">Exterior Emulsions</Link>
                  <Link to="/iex">Exterior & Interior Emulsions</Link>
                </div>
              )}
            </li>

            {/* Get Inspired Dropdown */}
            <li onClick={() => toggleDropdown("getInspired")}>
              <Link to="/GetInspired">Get Inspired </Link>
              <FontAwesomeIcon
                icon={
                  dropdownOpen === "getInspired" ? faChevronUp : faChevronDown
                }
                className="arrow"
              />
              {dropdownOpen === "getInspired" && (
                <div className="dropdown">
                  <Link to="/blog">Blogs</Link>
                  <Link to="/trendingcolor">
                    Trending Colour Combinations
                  </Link>
                </div>
              )}
            </li>

            {/* Contact Us */}
            <li>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Cart and Header Actions */}
        <div className="header-actions">
          <Link to="/Cartpage" className="icon">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>

          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
          <button className="dealer-locator">
            <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="login-icon" />
            Login
            </Link>
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="header-banner">
        <h1>Introducing SAP Paint's Neem Protect Interior Emulsion</h1>
        <button className="explore-button">Explore</button>
      </div>
    </header>
  );
};

export default Header;
