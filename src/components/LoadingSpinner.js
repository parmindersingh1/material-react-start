import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer} data-test="loadingSpinner">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
