import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/Logo.png";
import Navbar from "./Navbar";
import Header from "./Header";
import HomePage from "./HomePage";
import { useState } from "react";

function App() {
  return (
    
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
