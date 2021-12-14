import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Typography, Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import moment from "moment";

const useStyles = makeStyles({
  timelineStyle: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
    padding: "10px",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#000040",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  status: {
    margin: "0px",
    fontWeight: "bold",
    color: "#B4B4C1",
    fontSize: "16px",
  },
  statusDetail: {
    margin: "5px 0px",
    color: "#B4B4C1",
    fontSize: "14px",
  },
  pending: {
    color: "#D19431",
  },
  processing: {
    color: "#F0622F",
  },
  completed: {
    color: "#5A9E4B",
  },
  cancel: {
    color: "#FF0000",
  },
  pendingDot: {
    backgroundColor: "#D19431",
  },
  processingDot: {
    backgroundColor: "#F0622F",
  },
  completedDot: {
    backgroundColor: "#5A9E4B",
  },
  cancelDot: {
    backgroundColor: "#FF0000",
  },
  timelineMargin: {
    margin: "0px",
  },
});

const TimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      maxWidth: "20px",
    },
  },
})(MuiTimelineItem);

export default function TimelineStatus(props) {
  const classes = useStyles();
  return (
    <Container className={classes.timelineStyle}>
      <Typography variant="h5" className={classes.title}>
        Trạng thái
      </Typography>
      <Timeline className={classes.timelineMargin}>
        {props.statusList.map((item, idx) => {
          return idx !== 0 && idx % 2 === 0 && item.name === "pending" ? (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot className={classes.pendingDot} />
                {idx === props.statusList.length - 1 ? (
                  " "
                ) : (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.status)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.status)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.status)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.status))
                      }
                    >
                      Chờ xử lý
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.statusDetail)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.statusDetail)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.statusDetail)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.statusDetail))
                      }
                    >
                      Đơn hàng đã được hoàn tất một phần
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.statusDetail)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.statusDetail)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.statusDetail)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.statusDetail))
                      }
                    >
                      Đang đợi xử lí phần còn lại
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.status)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.status)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.status)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.status))
                      }
                    >
                      {moment(item.date)
                        .subtract(1, "days")
                        .format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
          ) : (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot
                  className={
                    (item.name === "pending" && classes.pendingDot) ||
                    (item.name === "processing" && classes.processingDot) ||
                    (item.name === "completed" && classes.completedDot) ||
                    (item.name === "cancle" && classes.cancelDot)
                  }
                />
                {idx === props.statusList.length - 1 ? (
                  " "
                ) : (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.status)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.status)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.status)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.status))
                      }
                    >
                      {(item.name === "pending" && "Chờ xử lý") ||
                        (item.name === "processing" && "Đang xử lý") ||
                        (item.name === "completed" && "Hoàn tất") ||
                        (item.name === "cancle" && "Đã hủy")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.statusDetail)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.statusDetail)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.statusDetail)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.statusDetail))
                      }
                    >
                      {(item.name === "pending" &&
                        "Đơn đặt hàng đang chờ được xử lí") ||
                        (item.name === "processing" &&
                          "Nhân viên đang xử lí đơn đặt hàng") ||
                        (item.name === "completed" &&
                          "Đơn đặt hàng đã được nhân viên xử lí xong") ||
                        (item.name === "cancle" && "Đã hủy đơn đặt hàng")}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      className={
                        (item.name === "pending" &&
                          clsx(classes.pending, classes.status)) ||
                        (item.name === "processing" &&
                          clsx(classes.processing, classes.status)) ||
                        (item.name === "completed" &&
                          clsx(classes.completed, classes.status)) ||
                        (item.name === "cancle" &&
                          clsx(classes.cancel, classes.status))
                      }
                    >
                      {moment(item.date)
                        .subtract(1, "days")
                        .format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                </Grid>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
}
