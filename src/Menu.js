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

function Menu() {
  const menu = [
    {
      name: "Carbonara",
      src: carbonara,
      ingredients: "spagetti , parmesan ,bacon , cream",
      price: "$15.99",
    },
    {
      name: "Cesar Salad",
      src: cesarsalad,
      ingredients: "mayonnaise , parmesan , mustard , cesar salad , croutan",
      price: "$13.00",
    },
    {
      name: "Ice Cream",
      src: icecream,
      ingredients: "vanilia , cocoa , oreo",
      price: "$6.99",
    },
    {
      name: "Margherita",
      src: margarita,
      ingredients: "mozzarella , tomato ,oliveoil , salt",
      price: "$14.00",
    },
    {
      name: "Wet Hamburger",
      src: wethamburger,
      ingredients:
        "ground beef , tomato , garlic , tomato paste , sugar , spices",
      price: "$14.00",
    },
    {
      name: "Meatball",
      src: meatball,
      ingredients:
        "egg , mince , salt , milk , garlic ,parmesan ,onion , parsley",
      price: "$13.00",
    },
    {
      name: "Tiramisu",
      src: tramisu,
      ingredients: "coffe",
      price: "$9.00",
    },
    {
      name: "Bomb Sandwich",
      src: sandwich,
      ingredients: "cheese , tomato , lettuce ,smoked",
      price: "$10.99",
    },
    {
      name: "Chicken Wrap",
      src: wrap,
      ingredients: "crispychicken , potato , corn , sauce ",
      price: "$13.99",
    },
  ];

  return (
    <>
      <h2 className="menu-title">Little Lemon's Menu</h2>
      <div className="menu-section">
        {menu.map((food) => (
          <div className="menu-card">
            <div
              className="menu-card__img"
              style={{ backgroundImage: `url(${food.src})` }}
            ></div>
            <div className="menu-description">
              <p className="menu-card__name">{food.name}</p>
              <p className="menu-card__ingredients">{food.ingredients}</p>
              <p className="menu-card__price">{food.price}</p>
              <button className="menu-btn">Order</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
