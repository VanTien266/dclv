import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignContent: "flex-start",
  },

  content: {},
}));
function DashBoard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Sidebar />
      </div>
      <div className={classes.content}>
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
