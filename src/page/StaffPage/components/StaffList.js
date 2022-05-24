import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  verticalCenterEmail: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonWidth: {
    minWidth: "24px",
    padding: "0px",
    height: "80%",
  },
  pLeft10: {
    paddingLeft: "10px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  headerTable: {
    textAlign: "left",
    color: "black",
    fontSize: "18px",
  },
  tableContentBlack: {
    color: "#000040",
    fontSize: "16px",
  },
  productScroll: {
    padding: "0",
    maxHeight: "500px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  buttonList: {
    minWidth: "24px",
    padding: "0px",
    height: "50%",
    color: "blue",
  },
}));

export default function StaffList(props) {
  const { className, staff } = props;
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/staff/${id}`);
  };
  return (
    <>
      {staff.map((item) => (
        <Grid
          container
          className={classes.root}
          onClick={() => handleClick(item._id)}
          key={item._id}
        >
          <Grid
            item
            xs={1}
            className={clsx(classes.orderId, classes.verticalCenter)}
          >
            <p>{item.id}</p>
          </Grid>
          <Grid item xs={3} className={classes.verticalCenter}>
            <p>{item.name}</p>
          </Grid>

          <Grid item xs={2} className={classes.verticalCenter}>
            <p>{item.role}</p>
          </Grid>

          <Grid item xs={1} className={classes.verticalCenter}>
            <p className={classes.verticalAlign}>
              {moment(item.birthday).subtract(1, "days").format("DD/MM/YYYY")}
            </p>
          </Grid>
          <Grid item xs={1} className={classes.verticalCenter}>
            <p className={classes.verticalAlign}>{item.phone}</p>
          </Grid>
          <Grid item xs={3} className={classes.verticalCenterEmail}>
            <p className={classes.verticalAlign}>{item.email}</p>
          </Grid>
          <Grid item xs={1} className={classes.verticalCenterEmail}>
            <p className={classes.verticalAlign}>{item.gender}</p>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
