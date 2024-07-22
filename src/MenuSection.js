import Menu from "./Menu";
import Footer from "./Footer";

const MenuSection = function (props) {
  const { data } = props;

  return (
    <>
      <Menu data={data} />
      <Footer />
    </>
  );
};

export default MenuSection;
