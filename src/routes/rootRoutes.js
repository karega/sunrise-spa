import Products from "../containers/Products"
import Product from "../containers/Product"
import PageHome from "../components/home/PageHome";
import { Switch, Route } from "react-router-dom";

const Root = () => {
    
  return (
    <>
      <Switch>
        <Route path="/products/:id">
            <Products />
        </Route>
        <Route path="/product/:slug/:sku">
            <Product />
        </Route>
        <Route path="/">
          <PageHome />
        </Route>
      </Switch>
    </>
  );
};

export default Root;
