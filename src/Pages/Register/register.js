import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import pandaImage from "../../components/Images/pandaa.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registration Data:", formData);

    // Save registration data to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(formData));
    alert("Registration Successful!");

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="register-modal">
      <div className="modal-form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
      <div className="panda-container">
        <img src={pandaImage} alt="Panda" />
      </div>
    </div>
  );
};

export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import "./register.css";
// import zebraImage from "../../components/Images/pandaa.png"; // Corrected path

// const mockStatesAndCities = {
//   Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
//   Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"],
// };

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     state: "",
//     city: "",
//     reason: "",
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [recaptchaVerified, setRecaptchaVerified] = useState(false);

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = "Name is required.";
//     if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile))
//       errors.mobile = "Valid mobile number is required.";
//     if (
//       !formData.email.trim() ||
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     )
//       errors.email = "Valid email is required.";
//     if (!formData.state) errors.state = "State is required.";
//     if (!formData.city) errors.city = "City is required.";
//     if (!formData.reason) errors.reason = "Reason is required.";
//     if (!formData.password.trim() || formData.password.length < 6)
//       errors.password = "Password must be at least 6 characters.";

//     return errors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length === 0) {
//       console.log("Form data submitted:", formData);
//       navigate("/login");
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   const handleRecaptchaChange = (value) => {
//     setRecaptchaVerified(!!value);
//         // Navigate to the login page
//         navigate("/login");

//   };

//   const cities = formData.state ? mockStatesAndCities[formData.state] : [];

//   return (
//     <main className="form-container">
//       <h1>Get In Touch</h1>
//       <div className="paintform">
//         <form className="contact-form" onSubmit={handleRegister}>
//           <div className="form-row">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name*"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//               {formErrors.name && <span className="error">{formErrors.name}</span>}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Mobile Number*"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleInputChange}
//                 required
//               />
//               {formErrors.mobile && (
//                 <span className="error">{formErrors.mobile}</span>
//               )}
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email Id*"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//               {formErrors.email && (
//                 <span className="error">{formErrors.email}</span>
//               )}
//             </div>
//           </div>
//           <div className="form-row">
//             <div>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">State*</option>
//                 {Object.keys(mockStatesAndCities).map((state) => (
//                   <option key={state} value={state}>
//                     {state}
//                   </option>
//                 ))}
//               </select>
//               {formErrors.state && (
//                 <span className="error">{formErrors.state}</span>
//               )}
//             </div>
//             <div>
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">City*(Select the city closer to you)</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//               {formErrors.city && <span className="error">{formErrors.city}</span>}
//             </div>
//             <div>
//               <select
//                 name="reason"
//                 value={formData.reason}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Contacting us for*</option>
//                 <option value="query">Query</option>
//                 <option value="feedback">Feedback</option>
//               </select>
//               {formErrors.reason && (
//                 <span className="error">{formErrors.reason}</span>
//               )}
//             </div>
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password*"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//             {formErrors.password && (
//               <span className="error">{formErrors.password}</span>
//             )}
//           </div>
//           <div className="recaptcha-container">
//             <ReCAPTCHA
//               sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your site key
//               onChange={handleRecaptchaChange}
//             />
//             {formErrors.recaptcha && (
//               <span className="error">{formErrors.recaptcha}</span>
//             )}
//           </div>
//           <div className="formsubmit">
//             <button
//               type="submit"
//               className="submit-button"
//               disabled={!recaptchaVerified}
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <img src={zebraImage} alt="Zebra" className="zebra-image" />
//       </div>
//     </main>
//   );
// };

// export default Register;
