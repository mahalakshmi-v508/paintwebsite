import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import GetInspired from "./Pages/GetInspired/GetInspired";
import Products from "./Pages/Products/Products";
import Interior from "./Pages/Products/Interior/interior";
import Exterior from "./Pages/Products/Exterior/exterior";
import Iex from "./Pages/Products/IEX/iex";
import Blog from "./Pages/GetInspired/Blog/blog";
import Trendingcolor from "./Pages/GetInspired/trendingcolor/trendingcolor";
import CartPage from "./components/CartPage/CartPage";
import Festival from "./Pages/GetInspired/Blog/festival/festival";                                                                                                       
import Living from "./Pages/GetInspired/Blog/Livivng/living";
import Kids from "./Pages/GetInspired/Blog/Kids/kids";
import Blogexterior from "./Pages/GetInspired/Blog/BlogExterior/blogexterior";
import Kitchen from "./Pages/GetInspired/Blog/kitchen/kitchen";
import Studys from "./Pages/GetInspired/Blog/Study/study";
import AdminLogin from "./Pages/admin/AdminLogin";
import AdminHeader from "./Pages/admin/adminHeader/adminHeader";
import AdminDashboard from "./Pages/admin/adminDashboard";
import Sidebar from "./Pages/admin/sidebar/sideBar";
import AdminProducts from "./Pages/admin/adminProducts";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/contact/contact";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";

const AppContent = () =>{
  const location = useLocation();
  const noHeaderFooterPages = ["/", "/login,","/adminDashboard","/adminProducts",]; // Pages without header and footer

  const shouldDisplayHeaderFooter = !noHeaderFooterPages.includes(location.pathname);

  return (
    <>
      {shouldDisplayHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/iex" element={<Iex />} />
        <Route path="/GetInspired" element={<GetInspired />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/living" element={<Living />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/blogexterior" element={<Blogexterior />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/study" element={<Studys />} />
        <Route path="/trendingcolor" element={<Trendingcolor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />


        {/* Admin Routes */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/sideBar" element={<Sidebar />} />
        <Route path="/adminHeader" element={<AdminHeader />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
      </Routes>
      {shouldDisplayHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
