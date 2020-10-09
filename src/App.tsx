import React from "react";
import "./App.css";
import Launch from "./components/Launch";
import Launchdetail from "./components/LaunchDetails";
import { Home } from "./components/Home/Home";
import Top from "./components/topbutton/Top";

const App = () => {
  return (
    <div className="Ap">
      <div className="App">
        <Home />
      </div>

      <Launch />
      <Launchdetail />
      <Top />
    </div>
  );
};

export default App;
