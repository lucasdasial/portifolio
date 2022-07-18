import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles/global.scss";
import "./styles/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
