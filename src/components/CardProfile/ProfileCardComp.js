import React from "react";
import { Box, Avatar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    height: 220,
    backgroundColor: "#FAFAFB",
    borderRadius: 5,
    marginBottom: 10,
    border: "2px solid #DADADA",
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: theme.spacing(1),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  text: {
    fontWeight: "600",
  },
}));

function ProfileCardComp({ staff }) {
  const classes = useStyles();
  const role = localStorage.getItem("role");

  return (
    <Box className={classes.container}>
      <Avatar
        className={classes.avatar}
        alt="Person"
        src={process.env.PUBLIC_URL + "/assets/avatar.png"}
      />

      <Box className={classes.content}>
        <Typography variant="body1" gutterBottom className={classes.text}>
          {staff.name}
        </Typography>
        <Typography variant="body1">{staff.role}</Typography>
      </Box>
    </Box>
  );
}

export default ProfileCardComp;
