import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import Launchdetail from "./Launchdetail";
import { useParams } from "react-router-dom";

const LaunchDetailsContainer = () => {
  let { id } = useParams();
  const { loading, error, data } = useLaunchInfoQuery({
    variables: { id: id },
  });
  if (loading) {
    return (
      <div className="parentLoader">
        <div className="loader">
          {/* <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
          style={{
            height: "50vh",
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "30%",
            marginRight: "30%",
          }}
        /> */}
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Give some Error</div>;
  }
  if (!data) {
    return <div>Please Select a mission detail</div>;
  }
  return <Launchdetail data={data} />;
};
export default LaunchDetailsContainer;
