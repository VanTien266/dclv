import React from "react";
import { Box, Avatar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 230,
    height: 250,
    backgroundColor: "#FAFAFB",
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: '1px',
    borderStyle: 'solid',
    marginLeft: '10px'
  },
  avatar: {
    width: 120,
    height: 120,
    margin: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 18,
  },
  text: {
    fontWeight: "600",
  },
  button: {
    margin: 10,
    width: 200,
    height: 50,
    border: "2px solid #DADADA",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none",
  },
}));
function InfoProfile() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Avatar
        className={classes.avatar}
        alt="Person"
        src={process.env.PUBLIC_URL + "/assets/avatar.png"}
      />
      <Box className={classes.content}>
        <Typography variant="body1" gutterBottom className={classes.text}>
          Nguyễn Văn Tĩnh
        </Typography>
        <Typography variant="body1">Nhân viên bán hàng</Typography>
      </Box>
    </Box>
  );
}

export default InfoProfile;
