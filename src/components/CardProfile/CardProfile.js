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
  const history = useHistory();
  const role = localStorage.getItem("role");

  const handleClick = () => {
    if (role) {
      history.push("/signin");
      localStorage.removeItem("role");
    } else history.push("/signin");
  };

  const handleOpenInfo = () => {
    if (role !== "customer" && role !== null) history.push(`/${role}/info`);
    else history.push(`/info`);
  };

  return (
    <Box className={classes.container}>
      <Button onClick={handleOpenInfo}>
        <Avatar
          className={classes.avatar}
          alt="Person"
          src={process.env.PUBLIC_URL + "/assets/avatar.png"}
        />
      </Button>

      <Box className={classes.content}>
        <Typography variant="body1" gutterBottom className={classes.text}>
          {role ? "Nguyễn Văn Tĩnh" : " "}
        </Typography>
        <Typography variant="body1">
          {role === "admin"
            ? "Quản lí"
            : role === "salesman"
            ? "Nhân viên bán hàng"
            : role === "shipper"
            ? "Nhân viên vận chuyển"
            : "Khách hàng"}
        </Typography>
      </Box>
      <Button className={classes.button} onClick={handleClick}>
        {role ? "Đăng xuất" : "Đăng nhập"}
      </Button>
    </Box>
  );
}

export default CardProfile;
