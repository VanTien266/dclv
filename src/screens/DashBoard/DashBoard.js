import React, { Suspense } from "react";
import { renderRoutes } from "react-router-config";
import Sidebar from "../../components/SideBar/Sidebar";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";
import routes from "../../routes";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignContent: "flex-start",
  },

  content: {},
}));
const DashBoard = () => {
  const classes = useStyles();
  const route = routes[1];
  return (
    <div className={classes.root}>
      <div>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </div>
    </div>
  );
};

export default DashBoard;
