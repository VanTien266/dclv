import React from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  menuIcon: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    color: "#000040",
  },
}));

function TopBar(props) {
  const { className, openSideBarMobile } = props;
  const classes = useStyles();
  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar disableGutters>
        <IconButton onClick={openSideBarMobile} className={classes.menuIcon}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
