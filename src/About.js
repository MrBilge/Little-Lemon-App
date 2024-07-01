import restaurant from "./assets/restauranfood.jpg";
function About() {
  return (
    <div className="About">
      <div className="about-description">
        <h2
          style={{
            fontSize: "48px",
            color: "#F4C142",
            fontFamily: "KARLA REGULA ",
          }}
        >
          Little Lemon
        </h2>
        <h3
          style={{
            fontFamily: "KARLA REGULA",
            fontSize: "23px",
            color: "#F4C142",
          }}
        >
          Chicago
        </h3>
        <article style={{ width: "50%", padding: "1rem 0 0 15rem" }}>
          <p
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "16px",
              letterSpacing: "4px",
              padding: "0 0 3rem 0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            fringilla urna velit, in sollicitudin sapien aliquam at. Sed viverra
            risus quis facilisis blandit. Donec pellentesque tortor vitae sem
            scelerisque finibus. Pellentesque et tristique velit. Phasellus
            fringilla vitae lacus ac fringilla. scelerisque finibus.
            Pellentesque et tristique velit. Phasellus fringilla vitae lacus ac
            fringilla.{" "}
          </p>
          <button className="btn about-btn">Reserve</button>
        </article>
      </div>

      <img
        src={restaurant}
        style={{
          maxWidth: "20%",
          height: "80%",
          borderRadius: "10px",
          padding: "3rem 1rem 0rem",
        }}
      ></img>
    </div>
  );
}

export default About;
