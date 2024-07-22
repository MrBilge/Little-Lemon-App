import { BrowserRouter, Link } from "react-router-dom";

import restaurant from "./assets/restauranfood.jpg";

function Action() {
  return (
    <div className="About">
      <div className="description">
        <h2 id="title-About">Little Lemon</h2>
        <h3 id="city-About">Chicago</h3>
        <article id="article-About">
          <p id="explain-About">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla urna velit, in sollicitudin sapien aliquam at. Sed viverra
            risus quis facilisis blandit. Donec pellentesque tortor vitae sem
            scelerisque finibus. Pellentesque et tristique velit. Phasellus
            fringilla vitae lacus ac fringilla. scelerisque finibus.
            Pellentesque et tristique velit. Phasellus fringilla vitae lacus ac
            fringilla.{" "}
          </p>
        </article>
        <Link to="/BookingPage">
          <button className="btn about-btn">Reserve</button>
        </Link>
      </div>
      <div>
        <div
          id="img-About"
          style={{ backgroundImage: `url(${restaurant})` }}
        ></div>
      </div>
    </div>
  );
}

export default Action;
