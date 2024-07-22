import Action from "./Action";
import Specials from "./Specials";
import CustomersSaySection from "./CustomersSaySection";
import Footer from "./Footer";
import Menu from "./Menu";

function HomePage(props) {
  const { data } = props;
  return (
    <>
      <Action />
      <Menu data={data} />
      <Specials />
      <CustomersSaySection />
      <Footer />
    </>
  );
}

export default HomePage;
