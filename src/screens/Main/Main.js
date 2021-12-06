import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline, LinearProgress } from "@material-ui/core";
import Sidebar from "../../components/SideBar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";

const SIDE_BAR_WIDTH = 200;
const TOP_BAR_HEIGHT = 64;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  topBar: {
    zIndex: 10,
    display: "flex",
    position: "fixed",
    height: TOP_BAR_HEIGHT,
    top: 0,
    right: 0,
    left: "auto",
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
      marginLeft: SIDE_BAR_WIDTH,
    },
  },
  sideBar: {
    zIndex: 100,
    [theme.breakpoints.up("lg")]: {
      width: SIDE_BAR_WIDTH,
      flexShrink: 0,
    },
    backgroundColor: "#000040",
  },
  content: {
    padding: theme.spacing(6),
    backgroundColor: "#fff",
    paddingTop: TOP_BAR_HEIGHT,
    overflowY: "auto",
    flex: "1 1 auto",
    height: "100vh"
  },
}));
const Main = (props) => {
  const { route } = props;
  const classes = useStyles();
  const [openSidebarMobile, setOpenSidebarMobile] = useState(false);
  const handleSidebarMobileOpen = () => {
    setOpenSidebarMobile(true);
  };
  const handleSidebarMobileClose = () => {
    setOpenSidebarMobile(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        className={classes.topBar}
        openSideBarMobile={handleSidebarMobileOpen}
      />
      <Sidebar
        className={classes.sideBar}
        onMobileClose={handleSidebarMobileClose}
        openMobile={openSidebarMobile}
      />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </div>
  );
};

export default Main;
