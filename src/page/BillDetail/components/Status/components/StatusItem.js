import React from "react";
import {
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
} from "@material-ui/lab";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  exportedDot: {
    backgroundColor: "#ff9800",
  },
  deliveryDot: {
    backgroundColor: "#2196f3",
  },
  successDot: {
    backgroundColor: "#4caf50",
  },
  failDot: {
    backgroundColor: "#f44336",
  },
  exportedTypo: {
    color: "#ff9800",
  },
  deliveryTypo: {
    color: "#2196f3",
  },
  successTypo: {
    color: "#4caf50",
  },
  failTypo: {
    color: "#f44336",
  },
  default: {
    color: "#1B40FA",
  },
}));

function StatusItem(props) {
  const { item, isLast } = props;
  const { name, content, time, reason } = item;
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          className={
            (name.tag === "exported" && classes.exportedDot) ||
            (name.tag === "delivery" && classes.deliveryDot) ||
            (name.tag === "success" && classes.successDot) ||
            (name.tag === "fail" && classes.failDot)
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className={classes.default}>
        <Grid container>
          <Grid item xs={9}>
            <Typography
              variant="body2"
              className={
                (name.tag === "exported" && classes.exportedTypo) ||
                (name.tag === "delivery" && classes.deliveryTypo) ||
                (name.tag === "success" && classes.successTypo) ||
                (name.tag === "fail" && classes.failTypo)
              }
            >
              {name.title}{" "}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              className={
                (name.tag === "exported" && classes.exportedTypo) ||
                (name.tag === "delivery" && classes.deliveryTypo) ||
                (name.tag === "success" && classes.successTypo) ||
                (name.tag === "fail" && classes.failTypo)
              }
            >
              {time.format("DD/MM/YYYY")}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="subtitle1">{content}</Typography>
        {reason === "" ? null : (
          <Typography variant="subtitle1">Lí do: {reason}</Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default StatusItem;
