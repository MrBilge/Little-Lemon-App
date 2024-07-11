import Action from "./Action";
import Specials from "./Specials";
import CustomersSaySection from "./CustomersSaySection";
import Footer from "./Footer";
import Menu from "./Menu";

function HomePage() {
  return (
    <>
      <Action />
      <Menu />
      <Specials />
      <CustomersSaySection />
      <Footer />
    </>
  );
}

export default HomePage;
