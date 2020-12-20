import React, { Fragment } from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
// import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // margin: "auto",
      maxWidth: 1000,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return (
    <div className="launches">
      <h1 style={{ fontFamily: "serif", marginLeft: "25px" }}>All Launches</h1>

      {!!data.launches &&
        data.launches.map(
          (Launch, i) =>
            !!Launch && (
              <Fragment key={i}>
                <div className={classes.root}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                              Flight Number :{Launch.flight_number}
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                              Mission Name : {Launch.mission_name}{" "}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Mission Successed{" "}
                              {Launch.launch_success === true ? "Yes" : "No"}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Link
                              to={`/${Launch.flight_number}`}
                              title="Button push blue/green"
                              className="button btnPush btnBlueGreen"
                            >
                              Details
                            </Link>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            Year : {Launch.launch_year}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </Fragment>
            )
        )}
    </div>
  );
};
export default Launch;
