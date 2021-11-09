import React, { useState, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ListItem, Button, Typography } from "@material-ui/core";

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(() => ({
  container: {
    width: 250,
    height: 50,
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "#69698360",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },

  icon: {
    fontSize: "30px",
    color: "#FAFAFB",
    margin: "0 10px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#FAFAFB",
    textTransform: "none",
  },
  activate: {
    backgroundColor: "#69698360",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));

const SidebarItem = (props) => {
  const { path, title, icon: Icon, active } = props;
  const isActivate = active(path);
  const [open, setOpen] = useState(isActivate);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ListItem disableGutters onClick={handleOpen}>
      <Button
        activeClassName={classes.activate}
        className={classes.container}
        component={CustomRouterLink}
        exact
        to={path}
      >
        {<Icon className={classes.icon} />}
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      </Button>
    </ListItem>
  );
};
export default SidebarItem;
