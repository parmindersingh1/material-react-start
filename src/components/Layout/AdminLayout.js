import {
  Container,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";

import Header from "./Header";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    backgroundColor: "#FFF",
  },
}));

const AdminLayout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(matchesSM ? false : true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerOpen = () => {
    setOpen((openState) => !openState);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <Header
        open={open}
        mobileOpen={mobileOpen}
        anchorEl={anchorEl}
        handleMenu={handleMenu}
        handleClose={handleClose}
        handleDrawerOpen={handleDrawerOpen}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      <SideMenu
        open={open}
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth={false} className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
};

export default AdminLayout;
