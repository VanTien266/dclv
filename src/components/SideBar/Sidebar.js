import React, { Fragment } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SidebarItem from "./components/SidebarItem";
import CardProfile from "../CardProfile/CardProfile";
import { Box, Drawer, Hidden, Paper } from "@material-ui/core";
import sidebarConfig from "./SalemanSidebarConfig";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: { height: "100%", overflowY: "auto" },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 260,
    minWidth: 260,
    //make full height
    height: "100vh",
    backgroundColor: "#000040",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Sidebar(props) {
  const { openMobile, onMobileClose, className } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  //check path is activate
  const match = (path) =>
    path ? matchPath({ path, end: false }, pathname) : false;
  const sidebarContent = (
    <div className={classes.sidebar}>
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        alt="logo"
        width="260"
      />
      <nav>
        {sidebarConfig.map((list) => (
          <SidebarItem
            key={list.tag}
            path={list.path}
            icon={list.icon}
            title={list.name}
            tag={list.tag}
            active={match}
          />
        ))}
      </nav>
      <Box sx={{ flexGrow: 1 }} />
      <CardProfile />
    </div>
  );
  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div className={clsx(classes.root, className)}>{sidebarContent}</div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper className={clsx(classes.root, className)} elevation={1} square>
          {sidebarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
}

export default Sidebar;
