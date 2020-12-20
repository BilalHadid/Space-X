import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./style.css";
import { useParams } from "react-router-dom";
import img1 from "../../assets/Images/logo1.png";

interface Props {
  data: LaunchInfoQuery;
}

const Launchdetail: React.FC<Props> = ({ data }) => {
  let { id } = useParams();

  console.log(id);

  if (!data.launch) {
    return <div>Launch Unavailable</div>;
  }
  return (
    <div className="LaunchDetail">
      <div>
        <img
          src={img1}
          alt=""
          style={{
            height: "30vh",
            width: "50%",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        />
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
        <span>Launch Successfull: {data.launch.launch_success}</span>
        <p> Details : {data.launch.details}</p>
      </div>
      <div>
        <h2>Rocket Details :</h2>
        <span>Rocket Name : {data.launch.rocket?.rocket_name}</span>
        <br></br>
        <span>Rocket Type : {data.launch.rocket?.rocket_type}</span>
      </div>

      <div>
        <h2>Links Details :</h2>
        <span>Rocket Name : {data.launch.rocket?.rocket_name}</span>
        <br></br>
        <span>Videos :</span>
      </div>
    </div>
  );
};
export default Launchdetail;
