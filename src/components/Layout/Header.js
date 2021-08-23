import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Config from "../../Config";
import MenuIcon from "@material-ui/icons/Menu";
import Messages from "./NavTab/Messages";
import Notification from "./NavTab/Notification";
import Profile from "./NavTab/Profile";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.custom.drawerWidth,
    width: `calc(100% - ${theme.custom.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: "inherit",
    [theme.breakpoints.up("md")]: {
      marginRight: 36,
    },
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const Header = ({
  open,
  mobileOpen,
  anchorEl,
  handleDrawerOpen,
  handleMenu,
  handleClose,
  handleMobileDrawerToggle,
  ...props
}) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      // className={clsx(classes.appBar, {
      //   [classes.appBarShift]: open,
      // })}
    >
      <Toolbar>
        <Hidden smDown>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            // className={clsx(classes.menuButton, {
            //   [classes.hide]: open,
            // })}
          >
            <MenuIcon
              classes={{
                root: open
                  ? classes.menuButtonIconOpen
                  : classes.menuButtonIconClosed,
              }}
            />
          </IconButton>
        </Hidden>

        <Typography variant="h6" noWrap className={classes.grow}>
          {Config.appName}
        </Typography>

        <Hidden smDown>
          <Box>
            <Messages />
            <Notification />
            <Profile />
          </Box>
        </Hidden>

        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={handleMobileDrawerToggle}
            aria-label="open drawer"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
