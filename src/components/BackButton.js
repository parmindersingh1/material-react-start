import { Button, IconButton, makeStyles } from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const BackButton = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={goBack}
      startIcon={<KeyboardBackspaceIcon />}
    >
      Back
    </Button>
  );
};

export default BackButton;
