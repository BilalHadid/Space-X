import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import Launchdetail from "./Launchdetail";

const LaunchDetailsContainer = () => {
  const { loading, error, data } = useLaunchInfoQuery({
    variables: { id: "13" },
  });
  if (loading) {
    return <div>loading work</div>;
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
