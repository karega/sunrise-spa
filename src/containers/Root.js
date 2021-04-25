import Footer from "../components/footer/TheFooter";
import Header from  "../components/header/TheHeader/"
import PageHome from "../components/home/PageHome";
import MiniCart from '../components/header/MiniCart'

const Root = () => {
  return (
    <>
      <Header />
      {false && <MiniCart/>}
      <PageHome/>
      <Footer />
    </>
  );
};

export default Root;
