import Footer from "./Footer";
import chefs from "./assets/chefs.png";
import chef from "./assets/chef.png";
import restaurant from "./assets/restaurant.png";
import served from "./assets/served.png";
import served2 from "./assets/served2.jpg";

function About() {
  return (
    <>
      <div className="section-about">
        <div className="nav-about nav-about__1">
          <div className="nav-about1__description">
            <h1 className="description-title title-1">Little Lemon</h1>
            <h2 className="subtitle subtitle-1">Chicago</h2>
            <p className="description description1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vestibulum, lectus a faucibus maximus, turpis libero
              laoreet ipsum, sed interdum mauris lorem a lacus. Fusce posuere
              interdum dictum. Vestibulum venenatis orci ut purus accumsan
              lacinia. Morbi at enim sed massa porttitor molestie a ut orci.
            </p>
          </div>
          <div className="chefs-img">
            <div
              className="nav-about-img nav-about__img1"
              style={{ backgroundImage: `url(${chef})` }}
            ></div>
            <div
              className="nav-about-img second-img"
              style={{ backgroundImage: `url(${chefs})` }}
            ></div>
          </div>
        </div>
        <div className="nav-about nav-about__2">
          <div className="nav-about2__description">
            <h1 className="description-title title-2"> Chicago Restaurant</h1>
            <h2 className="subtitle subtitle-2">spacious area</h2>
            <p className="description description-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vestibulum, lectus a faucibus maximus, turpis libero
              laoreet ipsum, sed interdum mauris lorem a lacus. Fusce posuere
              interdum dictum. Vestibulum venenatis orci ut purus accumsan
              lacinia. Morbi at enim sed massa porttitor molestie a ut orci.
            </p>
          </div>
          <div
            className="nav-about-img nav-about__img2"
            style={{ backgroundImage: `url(${restaurant})` }}
          ></div>
        </div>
        <div className="nav-about nav-about__3">
          <div className="nav-about3__description">
            <h1 className="description-title title-3">
              Served Every Day Since 1990
            </h1>
            <h2 className="subtitle subtitle-3">indispensable</h2>
            <p className="description description-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vestibulum, lectus a faucibus maximus, turpis libero
              laoreet ipsum, sed interdum mauris lorem a lacus. Fusce posuere
              interdum dictum. Vestibulum venenatis orci ut purus accumsan
              lacinia. Morbi at enim sed massa porttitor molestie a ut orci.
            </p>
          </div>
          <div className="servedImg-section">
            <div
              className="nav-about-img nav-about__img3"
              style={{ backgroundImage: `url(${served})` }}
            ></div>
            <div
              className="nav-about-img nav-about__img4"
              style={{ backgroundImage: `url(${served2})` }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
