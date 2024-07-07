import greeksalad from "./assets/greeksalad.jpg";
import bruschetta from "./assets/bruschetta.png";
import lemondessert from "./assets/lemondessert.jpg";
import { useEffect, useState } from "react";
function Specials() {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      desciption:
        "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. ",
      price: "$12.99",
      src: greeksalad,
    },
    {
      id: 2,
      name: "Lemon Dessert",
      desciption:
        "Lemon cake mix, eggs, lemon pie filling, cream cheese, butter ",
      price: "$4.99",
      src: lemondessert,
    },
    {
      id: 3,
      name: "Bruschetta",
      desciption:
        "Bruschetta is a slice of bread toasted in the oven or grilled, often rubbed with garlic and topped with extra-virgin olive oil, tomatoes and salt. ",
      price: "$7.99",
      src: bruschetta,
    },
  ];

  const varietyFood = [
    {
      id: 1,
      name: "Lunch",
      src: "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Sumac-turkey-stuffed-pittas-73482d5.jpg?quality=90&webp=true&resize=375,341",
    },
    {
      id: 2,
      name: "Mains",
      src: "https://img.taste.com.au/5_eQo-aS/w720-h480-cfill-q80/taste/2016/11/moroccan-steak-with-eggplant-tomato-salad-94876-1.jpeg",
    },
    {
      id: 3,
      name: "Dessert",
      src: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/2003/feb/17244-caramel-topped-ice-cream-dessert-600x600.jpg?ext=.jpg",
    },
    {
      id: 4,
      name: "Alacarte",
      src: "https://pinebay.com/images/food/13_turk-a-la-carte_0.jpg",
    },
    {
      id: 5,
      name: "Spaghetti",
      src: "https://besantr.com/wp-content/uploads/2020/02/KATKI-LEZZET-7.jpg",
    },
  ];

  const [stretch, setStretch] = useState(false);

  const handleStrech = () => {
    setStretch(!stretch);
  };
  const handleStrechOut = () => {
    setStretch(false);
  };

  return (
    <>
      <div className="orderlist-container">
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
            fontSize: "25px",

            color: "teal",
          }}
        >
          ORDER FOR DELIVERY
        </h3>
        <ul className="order-list">
          {varietyFood.map((variety) => (
            <div>
              <h3
                style={{
                  display: "block",
                  color: "teal",
                  fontWeight: "400",
                }}
              >
                {variety.name}
              </h3>
              <li
                key={variety.id}
                className="order-item"
                style={{
                  backgroundImage: `url(${variety.src})`,
                }}
              ></li>{" "}
            </div>
          ))}
        </ul>
      </div>

      <div className={`specials-container ${stretch ? "stretch" : ""}`}>
        <h3 className="specials-title"> This Week Specials </h3>
        {specials.map((speacial) => (
          <div
            className="special"
            onMouseOverCapture={handleStrech}
            onMouseLeave={handleStrechOut}
            style={{
              display: "flex",
              paddingLeft: "2rem",
              borderRadius: "8px",
              backgroundImage: `url(${speacial.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="special-description">
              <h3 style={{ color: "#F4C142" }}> {speacial.name} </h3>
              <p className="special-ingredients">{speacial.desciption}</p>
              <span style={{ color: "#F4C142", fontSize: "18px" }}>
                {speacial.price}
              </span>
              <button className="special-btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Specials;
