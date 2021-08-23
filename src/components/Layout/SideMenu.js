import { Divider, Drawer, Hidden, IconButton, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AppMenu from "./Menu/AppMenu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  appMenu: {
    width: "100%",
  },
  drawer: {
    width: theme.custom.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: theme.custom.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  // drawer: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.custom.drawerWidth,
  //     flexShrink: 0,
  //   },
  // },
  drawerPaper: {
    width: theme.custom.drawerWidth,
  },
}));

const SideMenu = ({ open, mobileOpen, handleMobileDrawerToggle, handleDrawerClose, ...props }) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();  

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <AppMenu />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          {/* https://codesandbox.io/s/intelligent-almeida-hhlu4?file=/src/AppMenuItemComponent.tsx:0-1044 */}
          <AppMenu />
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideMenu;
