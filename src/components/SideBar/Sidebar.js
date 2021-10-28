import React from "react";
import sidebarConfig from "./sideBarConfig";

import { makeStyles } from "@material-ui/styles";
import SidebarItem from "./components/SidebarItem";
import CardProfile from "../CardProfile/CardProfile";
import { Box } from "@material-ui/core";

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
  const sidebarContent = (
    <div className={classes.sidebar}>
      <img
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        alt="logo"
        width="260"
      />
      <nav>
        {sidebarConfig.map((list) => (
          <SidebarItem key={list.tag} title={list.name} icon={list.icon} />
        ))}
      </nav>
      <Box sx={{ flexGrow: 1 }} />
      <CardProfile />
    </div>
  );
  return <div>{sidebarContent}</div>;
}

export default Sidebar;
