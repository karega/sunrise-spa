import Footer from "../components/footer/TheFooter";
import Header from "../components/header/TheHeader/";
import RootRoute from "../routes/rootRoutes";
import MiniCart from "../components/header/MiniCart";

import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Router>
        <Header />
        {false && <MiniCart />}
        <RootRoute />
        <Footer />
      </Router>
    </>
  );
};

export default Root;
