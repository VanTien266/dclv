import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  sideBar: {
    zIndex: 3,
    width: 280,
    minWidth: 280,
    //make full height
    height: "100vh",
    position: "fixed",
    backgroundColor: "#000040",
  },
}));
function DashBoard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sideBar}>
        <Sidebar />
      </div>
      <div>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          illum quos aperiam, doloribus, fuga maxime explicabo, natus possimus
          dolore vel quaerat at quae hic! Atque ex odio non cupiditate
          inventore!
        </Typography>
      </div>
    </div>
  );
}

export default DashBoard;
