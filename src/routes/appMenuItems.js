import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import IconBarChart from "@material-ui/icons/BarChart";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconPeople from "@material-ui/icons/People";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";

const appMenuItems = [
  {
    name: "Employees",
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
        Icon: ArrowRightIcon,
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

export default appMenuItems;