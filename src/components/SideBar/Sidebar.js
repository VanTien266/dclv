import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SidebarItem from "./components/SidebarItem";
import CardProfile from "../CardProfile/CardProfile";
import { Box } from "@material-ui/core";
import sidebarConfig from "./sideBarConfig";

const useStyles = makeStyles(() => ({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 3,
    width: 260,
    minWidth: 260,
    //make full height
    height: "100vh",
    flex: "0 0 auto",
    backgroundColor: "#000040",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Sidebar() {
  const classes = useStyles();
  const { pathname } = useLocation();
  console.log(pathname);
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
  return <div>{sidebarContent}</div>;
}

export default Sidebar;
