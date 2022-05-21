import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import SidebarItem from "./components/SidebarItem";
import CardProfile from "../CardProfile/CardProfile";
import { Drawer, Hidden, Box, Typography } from "@material-ui/core";
import SalesmanSidebarConfig from "./SalemanSidebarConfig";
import AdminSidebarConfig from "./AdminSidebarConfig";
import CustomerSidebarConfig from "./CustomerSidebarConfig";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  sidebarBg: {
    backgroundColor: "#000040",
  },
  head: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  logo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  titleLogo: {
    color: "white",
    marginLeft: "10px",
  },
}));

function Sidebar(props) {
  const { openMobile, onMobileClose, className } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const role = localStorage.getItem("role");
  //Get sidebar list item with role
  let sidebarConfig = AdminSidebarConfig;

  //check path is activate
  const match = (path) => (path ? !!matchPath(pathname, { path }) : false);

  const sidebarContent = (
    <div className={classes.container}>
      <div className={classes.head}>
        <Link href="/">
          <Box className={classes.logo}>
            <img
              src={process.env.PUBLIC_URL + "/assets/logobkfabric.png"}
              alt="logo"
              width="50"
              height="50"
            />
            <Typography variant="h5" className={classes.titleLogo}>
              BK Fabric
            </Typography>
          </Box>
        </Link>
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
      </div>
      <CardProfile />
    </div>
  );
  return (
    <div className={className}>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          classes={{ paper: classes.sidebarBg }}
        >
          {sidebarContent}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer variant="permanent" open classes={{ paper: classes.sidebarBg }}>
          {sidebarContent}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default Sidebar;
