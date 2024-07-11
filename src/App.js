import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/Logo.png";
import Navbar from "./Navbar";
import Header from "./Header";
import HomePage from "./HomePage";
import About from "./About";
import BookingPage from "./BookingPage";
import Menu from "./Menu";
import Login from "./Login";
import CustomersSay from "./CustomersSay";
import React, { createContext, useState, useContext } from "react";
import MenuSection from "./MenuSection";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Menu" element={<MenuSection />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CustomersSay" element={<CustomersSay />} />
      </Routes>
    </>
  );
}

export default App;
