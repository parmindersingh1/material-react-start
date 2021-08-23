import { Button, Card, Paper, Typography, makeStyles } from "@material-ui/core";

import { Helmet } from 'react-helmet';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
    // marginTop: -theme.spacing(2),
  },
  pageHeader: {
    padding: theme.spacing(2, 2),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(1),
    color:  theme.custom.blueColor ,//"#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
  pageTools: {
    flex: 1,
    textAlign: "right"
  }
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, description, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <Helmet>
        <title>{title} | {description}</title>
      </Helmet>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {description}
          </Typography>
        </div>
        <div className={classes.pageTools}>
          {props.children}
        </div>
      </div>
    </Paper>
  );
}
