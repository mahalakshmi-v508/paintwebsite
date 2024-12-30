// import React from "react";
// import "./sideBar.css";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <ul className="sidebar-ul">
//         <li ><Link className="sidebar-nav-link" to="/"> Dashboard </Link></li>
//         <li><Link className="sidebar-nav-link">Products</Link></li>
//         <li><Link className="sidebar-nav-link">userContacts</Link></li>
//         <li><Link className="sidebar-nav-link">Collections</Link></li>
//         <li><Link className="sidebar-nav-link">Settings</Link></li>
//         <li><Link className="sidebar-nav-link">Reports</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { FaHome, FaChartBar, FaUser, FaCog, FaShoppingCart } from "react-icons/fa";
import "./sideBar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li><Link to="/adminDashboard" className="sidebar-nav-link"><FaHome /> Dashboard</Link></li>
        <li><Link to="/adminProducts" className="sidebar-nav-link"><FaShoppingCart /> Products</Link></li>
        <li><Link to="/TrendingChart" className="sidebar-nav-link"><FaUser /> Customers</Link></li>
        <li><Link to="/TrendingChart" className="sidebar-nav-link"><FaCog /> Settings</Link></li>
        <li><Link to="/" className="sidebar-nav-link"><FaChartBar /> Reports</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
