import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppMenuItemComponent from "./AppMenuItemComponent";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

// import { SvgIconProps } from '@material-ui/core/SvgIcon'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

const AppMenuItem = (props) => {
  const { name, link, Icon, size = "medium", items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
    // if (props.isMobile && props.handleMobileDrawerToggle) {
    //   props.handleMobileDrawerToggle();
    // }
  }

  function handleCloseMobileMenu() {
    console.log("Link CLiked", props.isMobile)
    if (props.isMobile && props.handleMobileDrawerToggle) {
      props.handleMobileDrawerToggle();
    }
  }

  useEffect(() => {
    if (items.find((item) => item.link === window.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [items]);

  const MenuItemRoot = (
    <AppMenuItemComponent
      className={classes.menuItem}
      link={link}
      onClick={handleClick}
      handleCloseMobileMenu={handleCloseMobileMenu}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon fontSize={size} />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem
            {...item}
            key={index}
            size="small"
            handleMobileDrawerToggle={props.handleMobileDrawerToggle}
            isMobile={props.isMobile}
          />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      "&.active": {
        background: "rgba(0, 0, 0, 0.08)",
        "& .MuiListItemIcon-root": {
          color: theme.palette.primary.dark,
        },
      },
    },
    menuItemIcon: {
      color: theme.palette.primary.main,
    },
  })
);
export default AppMenuItem;
