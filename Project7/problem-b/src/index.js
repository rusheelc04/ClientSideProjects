import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./style.css";

import SAMPLE_DOGS from "./data/dogs.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App pets={SAMPLE_DOGS} />
  </React.StrictMode>
);