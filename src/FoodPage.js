import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FoodPage({ data }) {
  const { name } = useParams();
  const currentData = data.find((food) => food.strMeal === name);

  console.log(currentData);

  const [quantity, setQuantity] = useState(1); // Başlangıç adedi 1 olarak ayarla

  if (!currentData) {
    return <div>Loading...</div>; // currentData henüz yüklenmemişse bir yükleme mesajı gösterin
  }

  const handleIncrement = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = (currentData.price * quantity).toFixed(2);
  return (
    <div className="food-page-container">
      <div className="food-order">
        <img
          className="food-order_img"
          src={currentData.strMealThumb}
          alt={currentData.strMeal}
        />
        <div className="food-order-desc">
          <h2 className="food-order-desc_title">{currentData.strMeal}</h2>
          <p className="food-order-desc_price">Price: ${totalPrice}</p>
          <div>
            <h4 style={{ textAlign: "center" }}>Quantity</h4>
            <div className="food-order-quantity">
              <button onClick={handleDecrement} className="quantity-button">
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button onClick={handleIncrement} className="quantity-button">
                +
              </button>
            </div>
          </div>
          <Link to="/YourAddress">
            <button className="addOrder">Add</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodPage;
