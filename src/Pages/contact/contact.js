import React from "react";
import "./contact.css";
import one from "../../components/Images/contact/contact.jpeg";

function Contact() {
  return (
    <div className="contact-container">
   
      {/* Banner Image */}
      <div className="contact-banner">
      <img
    src={one} // Replace with the actual URL or path to your image
    alt="Contact Banner"
    className="contact-banner-img"
  />
      </div>

      <div className="contact-form-container">
        <h1>Get In Touch</h1>
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
              <option value="Gujarat">Gujarat</option>
            </select>
            <input
              type="text"
              placeholder="City*(Select the city closer to you)"
              required
            />
            <select required>
              <option value="">Contacting us for*</option>
              <option value="query">Query</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="recaptcha-placeholder">I'm not a robot</div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
