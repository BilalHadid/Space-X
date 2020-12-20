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
