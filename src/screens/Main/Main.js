import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import Sidebar from "../../components/SideBar/Sidebar";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    position: "fixed",
  },
  sideBar: { zIndex: 3, flex: "0 0 auto" },

  content: { flex: "1 1 auto", overflowY: "auto" },
}));
const Main = (props) => {
  const { route } = props;
  const classes = useStyles();
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);

  const handleSidebarMobileClose = () => {
    setOpenSidebarMobile(false);
  };

  return (
    <div className={classes.root}>
      <div>
        <Sidebar
          className={classes.sideBar}
          onMobileClose={handleSidebarMobileClose}
          openMobile={openSidebarMobile}
        />
      </div>
      <div className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </div>
    </div>
  );
};

export default Main;
