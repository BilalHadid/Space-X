import React from "react";
import "./App.css";
import Launch from "./components/Launch";
import Launchdetail from "./components/LaunchDetails";
import { Home } from "./components/Home/Home";

const App = () => {
  return (
    <div className="Ap">
      <Home />
      <Launch />
      <Launchdetail />
    </div>
  );
};

export default App;
