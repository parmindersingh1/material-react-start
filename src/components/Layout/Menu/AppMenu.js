import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppMenuItem from "./AppMenuItem";
import List from "@material-ui/core/List";
import React from "react";
import appMenuItems from "../../../routes/appMenuItems";

const AppMenu = ({ handleMobileDrawerToggle, isMobile = false }) => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} handleMobileDrawerToggle={handleMobileDrawerToggle} isMobile={isMobile} />
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: theme.custom.drawerWidth,
    },
    menuItem: {
      width: theme.custom.drawerWidth,
    },
    menuItemIcon: {
      color: theme.palette.primary.main,
    },
  })
);

export default AppMenu;
