import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor: theme.custom.blueColor,
    },
    navAvatar: {
      width: "35px",
      height: "35px",
    },
    // navbar styles
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },
  };
});
