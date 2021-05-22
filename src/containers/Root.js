import React from "react";
import Footer from "../components/footer/TheFooter";
import Header from "../components/header/TheHeader/";
import RootRoute from "../routes/rootRoutes";
import MiniCart from "../components/header/MiniCart";
import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  const [isOpen, open] = React.useState(false)
  return (
    <>
      <Router>
        <Header openCart={open}/>
        { isOpen && <MiniCart openCart={open} />}
        <RootRoute />
        <Footer />
      </Router>
    </>
  );
};

export default Root;
