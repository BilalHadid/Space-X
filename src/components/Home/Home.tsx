import React from "react";
import logo from "../../assets/Images/logo.png";
import rocket from "../../assets/Images/rocket.png";

import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      {/* <img src={logo} alt="Logo" /> */}

      {/* <div style={{ marginTop: "40%" }}>
        <span className="scroll-btn">
          <span className="mouse">
            <span></span>
          </span>
        </span>
      </div> */}
      <div>
        <img
          src={rocket}
          alt="rocket"
          style={{
            height: "50%",
            width: "50% ",
            marginTop: "3%",
            marginLeft: "40%",
          }}
        />
      </div>
    </div>
  );
};
