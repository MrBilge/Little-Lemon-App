import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/Logo.png";
import Navbar from "./Navbar";
import Header from "./Header";
import HomePage from "./HomePage";
import About from "./About";
import BookingPage from "./BookingPage";
import Menu from "./Menu";
import FoodPage from "./FoodPage";

import CustomersSay from "./CustomersSay";
import React, { useState } from "react";
import MenuSection from "./MenuSection";
import { useEffect } from "react";
import YourAddress from "./YourAddress";
function App() {
  const [data, setData] = useState([]);
  function fetchData() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((mealData) => {
        if (mealData.meals) {
          console.log(mealData);
          const mealsWithPrices = mealData.meals.map((meal) => ({
            ...meal,
            price: (Math.random() * 5 + 3).toFixed(2),
          }));
          setData(mealsWithPrices);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/About" element={<About />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Menu" element={<MenuSection data={data} />} />
        <Route path="/CustomersSay" element={<CustomersSay />} />
        <Route path={`/foodPage/:name`} element={<FoodPage data={data} />} />
        <Route path="/YourAddress" element={<YourAddress />} />
      </Routes>
    </>
  );
}

export default App;
