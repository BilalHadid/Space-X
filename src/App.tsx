import React from "react";
import "./App.css";
// import Launch from "./components/Launch";
import Launchdetail from "./components/LaunchDetails";
// import { Home } from "./components/Home/Home";
// import Top from "./components/topbutton/Top";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

const App = () => {
  return (
    <div className="Ap">
      {/* <Main /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Launchdetail />} />
      </Routes>
    </div>
  );
};

export default App;
