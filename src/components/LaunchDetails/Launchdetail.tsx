import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./style.css";
import img1 from "../../assets/Images/logo1.png";

interface Props {
  data: LaunchInfoQuery;
}

const Launchdetail: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>Launch Unavailable</div>;
  }
  return (
    <div className="LaunchDetail">
      <div>
        <img src={img1} alt="" className="imgLogo" />
      </div>

      <h1 style={{ fontFamily: "serif", fontSize: "55px" }}>
        Mission: {data.launch.mission_name}
      </h1>

      <div style={{ fontFamily: "serif" }}>
        <h2>Launch Details :</h2>
        <span>Flight Number : {data.launch.flight_number}</span>
        <br></br>
        <span>Launch year : {data.launch.launch_year}</span>
        <br></br>
        <span>
          Launch Successfull:{" "}
          {data.launch.launch_success === true ? "YES" : "NO"}
        </span>
        <br></br>
        <span style={{ width: "100%" }}> Detail : {data.launch.details}</span>
      </div>
      <div>
        <h2>Rocket Details :</h2>
        <span>Rocket Name : {data.launch.rocket?.rocket_name}</span>
        <br></br>
        <span>Rocket Type : {data.launch.rocket?.rocket_type}</span>
      </div>
    </div>
  );
};
export default Launchdetail;
