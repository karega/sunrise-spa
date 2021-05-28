import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./containers/Root";
import Main from "./layouts/Main";
import "./i18n";

ReactDOM.render(
  <Main>
    <Root></Root>
  </Main>,
  document.getElementById("root")
);
