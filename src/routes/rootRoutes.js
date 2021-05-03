import Products from "../containers/Products"
import PageHome from "../components/home/PageHome";

import { Switch, Route } from "react-router-dom";

const Root = () => {
    
  return (
    <>
      <Switch>
        <Route path="/products/:id">
            <Products />
        </Route>
        <Route path="/">
          <PageHome />
        </Route>
      </Switch>
    </>
  );
};

export default Root;
