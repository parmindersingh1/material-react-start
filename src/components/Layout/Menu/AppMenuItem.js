import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppMenuItemComponent from "./AppMenuItemComponent";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

// import { SvgIconProps } from '@material-ui/core/SvgIcon'

// // React runtime PropTypes
// export const AppMenuItemPropTypes = {
//   name: PropTypes.string.isRequired,
//   link: PropTypes.string,
//   Icon: PropTypes.elementType,
//   items: PropTypes.array,
// };
const AppMenuItem = (props) => {
  const { name, link, Icon, items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen(!open);
  }
  const MenuItemRoot = React.createElement(
    AppMenuItemComponent,
    { className: classes.menuItem, link: link, onClick: handleClick },
    !!Icon &&
      React.createElement(
        ListItemIcon,
        { className: classes.menuItemIcon },
        React.createElement(Icon, null)
      ),
    React.createElement(ListItemText, { primary: name, inset: !Icon }),
    isExpandable && !open && React.createElement(IconExpandMore, null),
    isExpandable && open && React.createElement(IconExpandLess, null)
  );
  const MenuItemChildren = isExpandable
    ? React.createElement(
        Collapse,
        { in: open, timeout: "auto", unmountOnExit: true },
        React.createElement(Divider, null),
        React.createElement(
          List,
          { component: "div", disablePadding: true },
          items.map((item, index) =>
            React.createElement(
              AppMenuItem,
              Object.assign({}, item, { key: index })
            )
          )
        )
      )
    : null;
  return React.createElement(
    React.Fragment,
    null,
    MenuItemRoot,
    MenuItemChildren
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
