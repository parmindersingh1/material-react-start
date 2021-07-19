import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import Header from "./Header";
import SideMenu from "./SideMenu";

const PageDashboard = () => (
  <Typography variant="h3" component="h1">
    Dashboard Page
  </Typography>
);
const PageOrders = () => (
  <Typography variant="h3" component="h1">
    Orders Page
  </Typography>
);
const PageCustomers = () => (
  <Typography variant="h3" component="h1">
    Customers Page
  </Typography>
);
const PageReports = () => (
  <Typography variant="h3" component="h1">
    Reports Page
  </Typography>
);

const LevelPage = () => (
  <Typography variant="h3" component="h1">
    Level Page
  </Typography>
);

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
    padding: theme.spacing(3),
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
}));

const MainLayout = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

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
      <BrowserRouter>
        <Header
          open={open}
          anchorEl={anchorEl}
          handleMenu={handleMenu}
          handleClose={handleClose}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SideMenu
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/" exact component={PageDashboard} />
              <Route path="/orders" component={PageOrders} />
              <Route path="/customers" component={PageCustomers} />
              <Route path="/reports" component={PageReports} />
              <Route path="/level" component={LevelPage} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default MainLayout;
