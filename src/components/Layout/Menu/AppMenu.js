import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppMenuItem from "./AppMenuItem";
import IconBarChart from "@material-ui/icons/BarChart";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconPeople from "@material-ui/icons/People";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import List from "@material-ui/core/List";
import React from "react";

const appMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    Icon: IconDashboard,
  },
  {
    name: "Orders",
    link: "/orders",
    Icon: IconShoppingCart,
  },
  {
    name: "Customers",
    link: "/customers",
    Icon: IconPeople,
  },
  {
    name: "Reports",
    link: "/reports",
    Icon: IconBarChart,
  },
  {
    name: "Nested Pages",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Level 2",
        link: "/level",
      },
      {
        name: "Level 2",
        items: [
          {
            name: "Level 3",
          },
          {
            name: "Level 3",
          },
        ],
      },
    ],
  },
];

const AppMenu = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
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
