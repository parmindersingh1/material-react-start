import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import AdminLayout from "../components/Layout/AdminLayout";
import LoadingSpinner from "../components/LoadingSpinner";
import { Typography } from "@material-ui/core";

const PageEmployees = React.lazy(() =>
  import("../pages/Employees/EmployeesList")
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

const isAuthorized = true;

const Routes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        {isAuthorized ? (
          <AdminLayout>
            <Route path="/" exact component={PageEmployees} />
            <Route path="/orders" component={PageOrders} />
            <Route path="/customers" component={PageCustomers} />
            <Route path="/reports" component={PageReports} />
            <Route path="/level" component={LevelPage} />
          </AdminLayout>
        ): <LoadingSpinner />}
      </Switch>
    </Suspense>
  );
};

export default Routes;
