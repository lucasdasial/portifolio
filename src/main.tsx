import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles/global.scss";
import "./styles/variables.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
