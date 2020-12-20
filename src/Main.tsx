import React from "react";
import "./App.css";
import Launch from "./components/Launch";
// import Launchdetail from "./components/LaunchDetails";
import { Home } from "./components/Home/Home";

const Main = () => {
  return (
    <div className="Ap">
      <div className="App">
        <Home />
      </div>

      <Launch />

      {/* <Launchdetail /> */}
    </div>
  );
};

export default Main;
