import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="launches">
      <h3>All Launches Space X</h3>
      <ol className="LaunchesOL">
        {!!data.launches &&
          data.launches.map(
            (Launch, i) =>
              !!Launch && (
                <li className="LaunchItems">
                  {Launch.mission_name} - {Launch.launch_year}(
                  {JSON.stringify(Launch.launch_success)}){Launch.flight_number}
                </li>
              )
          )}
      </ol>
    </div>
  );
};
export default Launch;
