import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "./Store";
import Routes from "./Routes";

ReactDOM.render(
  <StoreProvider>
    <Routes />
  </StoreProvider>,
  document.getElementById("root")
);
