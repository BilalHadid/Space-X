import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch from "./Launch";

const LaunchContainer = () => {
  const { loading, error, data } = useLaunchesQuery();
  if (loading)
    return (
      <div className="parentLoader">
        <div className="loader"></div>
      </div>
    );
  if (error || !data) {
    return <div>There was an error</div>;
  }
  return <Launch data={data} />;
};

export default LaunchContainer;
