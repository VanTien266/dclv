import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ListItem, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    width: 250,
    height: 50,
    justifyContent: "flex-start",
  },

  icon: {
    fontSize: "40px",
    color: "#FAFAFB",
    margin: "0 10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FAFAFB",
    textTransform: "none",
  },
  activate: {
    backgroundColor: "#696983",
  },
}));

const SidebarItem = (props) => {
  const { title, icon: Icon } = props;
  const classes = useStyles();
  return (
    <ListItem disableGutters>
      <Button className={classes.container} activeClassName={classes.activate}>
        {<Icon className={classes.icon} />}
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </Button>
    </ListItem>
  );
};
export default SidebarItem;
