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
import moment from "moment";

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
  pastDot: { backgroundColor: "#B4B4C1" },
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
  pastTypo: { color: "#B4B4C1" },
  default: {
    color: "#1B40FA",
  },
}));

function StatusItem(props) {
  const { index, item, isLast, numberOfFailed } = props;
  const classes = useStyles();
  console.log(index);
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          className={
            isLast
              ? (item.name === "exported" && classes.exportedDot) ||
                (item.name === "shipping" && classes.deliveryDot) ||
                (item.name === "completed" && classes.successDot) ||
                (item.name === "failed" && classes.failDot)
              : classes.pastDot
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
                isLast
                  ? (item.name === "exported" && classes.exportedTypo) ||
                    (item.name === "shipping" && classes.deliveryTypo) ||
                    (item.name === "completed" && classes.successTypo) ||
                    (item.name === "failed" && classes.failTypo)
                  : classes.pastTypo
              }
            >
              {(item.name === "exported" && "Đã xuất") ||
                (item.name === "shipping" && "Đang vận chuyển") ||
                (item.name === "completed" && "Giao hàng thành công") ||
                (item.name === "failed" && index === 2
                  ? "Đợi vận chuyển lần 2"
                  : index === 4
                  ? "Đợi vận chuyển lần 3"
                  : "Giao hàng thất bại")}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle1"
              className={
                isLast
                  ? (item.name === "exported" && classes.exportedTypo) ||
                    (item.name === "shipping" && classes.deliveryTypo) ||
                    (item.name === "completed" && classes.successTypo) ||
                    (item.name === "failed" && classes.failTypo)
                  : classes.pastTypo
              }
            >
              {moment(item.date).format("DD/MM/YYYY")}
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          className={isLast ? "" : classes.pastTypo}
        >
          {(item.name === "exported" &&
            "Đơn hàng đã được xuất, chuẩn bị vận chuyển") ||
            (item.name === "shipping" && "Đơn hàng đang được vận chuyển") ||
            (item.name === "completed" && "Đơn hàng được giao thành công") ||
            (item.name === "failed" && index === 2
              ? "Đơn hàng giao thất bại chuẩn bị vận chuyển lần 2"
              : index === 4
              ? "Đơn hàng giao thất bại, chuẩn bị vận chuyển lần 3"
              : " Đơn hàng giao thất bại")}
        </Typography>
        {item.reason ? (
          <Typography
            variant="subtitle1"
            className={isLast ? classes.failTypo : classes.pastTypo}
          >
            Lí do: {item.reason}
          </Typography>
        ) : null}
        {isLast && numberOfFailed === 3 ? (
          <Typography variant="subtitle1" className={classes.failTypo}>
            Tiến hành hủy đơn hàng
          </Typography>
        ) : null}
      </TimelineContent>
    </TimelineItem>
  );
}

export default StatusItem;
