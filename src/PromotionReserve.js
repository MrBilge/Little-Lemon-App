import restaurant from "./assets/restauranfood.jpg";
import served2 from "./assets/served2.jpg";

function PromotionReserve() {
  return (
    <>
      <div className="reserve-container">
        <div className="About">
          <div className="description">
            <h2 id="title-About">Table Reserve</h2>
            <h3 id="city-About">Chicago</h3>
            <article id="article-About">
              <p id="explain-About">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fringilla urna velit, in sollicitudin sapien aliquam at. Sed
                viverra risus quis facilisis blandit. Donec pellentesque tortor
                vitae sem scelerisque finibus. Pellentesque et tristique velit.
                Phasellus fringilla vitae lacus ac fringilla. scelerisque
                finibus. Pellentesque et tristique velit. Phasellus fringilla
                vitae lacus ac fringilla.{" "}
              </p>
            </article>
          </div>
          <div>
            <div
              id="img-About"
              style={{ backgroundImage: `url(${served2})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionReserve;
