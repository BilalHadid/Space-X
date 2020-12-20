import React from "react";
import logo from "../../assets/Images/logo1.png";
// import rocket from "../../assets/Images/rocket.png";

import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      {/* <img
        src="https://www.animatedimages.org/data/media/45/animated-astronaut-image-0038.gif"
        alt=""
      /> */}
      <img
        style={{
          height: "30vh",
          width: "50%",
          marginLeft: "20%",
          marginRight: "20%",
        }}
        src={logo}
        alt=""
      />
      {/* <h1 style={{ fontFamily: "serif" }}>Space x</h1> */}
    </div>
  );
};
