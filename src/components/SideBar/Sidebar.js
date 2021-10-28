import React from "react";
import sidebarConfig from "./sideBarConfig";
import SidebarItem from "./components/SidebarItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
}));

function Sidebar() {
  const classes = useStyles();
  const sidebarContent = (
    <div className={classes.sidebar}>
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
      <nav>
        {sidebarConfig.map((list) => (
          <SidebarItem key={list.tag} title={list.name} icon={list.icon} />
        ))}
      </nav>
    </div>
  );
  return <div>{sidebarContent}</div>;
}

export default Sidebar;
