import { useEffect, useState } from "react";
import Footer from "./Footer";
import carbonara from "./Menu-assets/carbonara.jpg";
import cesarsalad from "./Menu-assets/cesarsalad.jpg";
import icecream from "./Menu-assets/icecream.jpg";
import wethamburger from "./Menu-assets/islakhamburger.jpg";
import margarita from "./Menu-assets/margarita.jpg";
import meatball from "./Menu-assets/mealball.webp";
import sandwich from "./Menu-assets/sandwich.png";
import tramisu from "./Menu-assets/tramisu.webp";
import wrap from "./Menu-assets/wrap.jpg";
import { BrowserRouter, Link } from "react-router-dom";

function Menu(props) {
  const { data } = props;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);

  const handleNextfood = function () {
    setStartIndex(startIndex + 8);
    setEndIndex(endIndex + 8);
  };

  const handlePrevfood = function () {
    setStartIndex(startIndex - 8);
    setEndIndex(endIndex - 8);
  };

  return data ? (
    <>
      <h2 className="menu-title">Little Lemon's Menu</h2>
      <div className="menu-section">
        {startIndex >= 8 && (
          <button onClick={handlePrevfood} className="slide-btn menu-pre-btn">
            ←
          </button>
        )}
        {data.slice(startIndex, endIndex).map((food) => (
          <Link to={`/foodPage/${food.strMeal}`}>
            {" "}
            <div key={food.idMeal} className="menu-card">
              <div
                className="menu-card__img"
                style={{ backgroundImage: `url(${food.strMealThumb})` }}
              ></div>
              <div className="menu-description">
                <p className="menu-card__name">{food.strMeal}</p>
                <p className="menu-card__price">${food.price}</p>
                <button className="menu-btn">Order</button>
              </div>
            </div>{" "}
          </Link>
        ))}
        <button
          style={endIndex > data.length ? { display: "none" } : {}}
          onClick={handleNextfood}
          className="slide-btn menu-next-btn"
        >
          →
        </button>
      </div>
    </>
  ) : (
    <p>Loading</p>
  );
}

export default Menu;
