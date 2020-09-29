import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./style.css";

interface Props {
  data: LaunchInfoQuery;
}

const Launchdetail: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>Launch Unavailable</div>;
  }
  return (
    <div>
      <div>
        <span>Flight : {data.launch.flight_number}</span>
      </div>
    </div>
  );
};
export default Launchdetail;
