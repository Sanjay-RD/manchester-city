import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
