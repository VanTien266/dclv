import React from "react";
import { Box, Avatar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 190,
    backgroundColor: "#FAFAFB",
    borderRadius: 5,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
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
  button: {
    marginBottom: theme.spacing(2),
    width: 140,
    height: 40,
    border: "2px solid #DADADA",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none",
  },
}));
function CardProfile() {
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
      <Button className={classes.button}>Xem thông tin</Button>
    </Box>
  );
}

export default CardProfile;
