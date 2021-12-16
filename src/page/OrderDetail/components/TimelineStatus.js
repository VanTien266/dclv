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
  past: {
    color: "#B4B4C1",
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
  pastDot: {
    backgroundColor: "#B4B4C1",
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
  const lastStatusIdx = props.statusList.length - 1;
  return (
    <Container className={classes.timelineStyle}>
      <Typography variant="h5" className={classes.title}>
        Trạng thái
      </Typography>
      <Timeline className={classes.timelineMargin}>
        {props.statusList?.length > 0
          ? props.statusList.map((item, idx) => {
              return idx !== 0 && idx % 2 === 0 && item.name === "pending" ? (
                <TimelineItem key={idx}>
                  {idx === lastStatusIdx ? (
                    <TimelineSeparator>
                      <TimelineDot className={classes.pendingDot} />
                    </TimelineSeparator>
                  ) : (
                    <TimelineSeparator>
                      <TimelineDot className={classes.pastDot} />
                      <TimelineConnector />
                    </TimelineSeparator>
                  )}
                  <TimelineContent>
                    <Grid container>
                      <Grid item xs={9}>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.status)) ||
                            clsx(classes.pending, classes.status)
                          }
                        >
                          Chờ xử lý
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.statusDetail)) ||
                            clsx(classes.pending, classes.statusDetail)
                          }
                        >
                          Đơn hàng đã được hoàn tất một phần
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.statusDetail)) ||
                            clsx(classes.pending, classes.statusDetail)
                          }
                        >
                          Đang đợi xử lí phần còn lại
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.status)) ||
                            clsx(classes.pending, classes.status)
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
                        (idx !== lastStatusIdx && classes.pastDot) ||
                        (item.name === "pending" &&
                          idx === lastStatusIdx &&
                          classes.pendingDot) ||
                        (item.name === "processing" &&
                          idx === lastStatusIdx &&
                          classes.processingDot) ||
                        (item.name === "completed" &&
                          idx === lastStatusIdx &&
                          classes.completedDot) ||
                        (item.name === "cancel" &&
                          idx === lastStatusIdx &&
                          classes.cancelDot)
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
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.status)) ||
                            (item.name === "pending" &&
                              idx === lastStatusIdx &&
                              clsx(classes.pending, classes.status)) ||
                            (item.name === "processing" &&
                              idx === lastStatusIdx &&
                              clsx(classes.processing, classes.status)) ||
                            (item.name === "completed" &&
                              idx === lastStatusIdx &&
                              clsx(classes.completed, classes.status)) ||
                            (item.name === "cancel" &&
                              idx === lastStatusIdx &&
                              clsx(classes.cancel, classes.status))
                          }
                        >
                          {(item.name === "pending" && "Chờ xử lý") ||
                            (item.name === "processing" && "Đang xử lý") ||
                            (item.name === "completed" && "Hoàn tất") ||
                            (item.name === "cancel" && "Đã hủy")}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.statusDetail)) ||
                            (item.name === "pending" &&
                              idx === lastStatusIdx &&
                              clsx(classes.pending, classes.statusDetail)) ||
                            (item.name === "processing" &&
                              idx === lastStatusIdx &&
                              clsx(classes.processing, classes.statusDetail)) ||
                            (item.name === "completed" &&
                              idx === lastStatusIdx &&
                              clsx(classes.completed, classes.statusDetail)) ||
                            (item.name === "cancel" &&
                              idx === lastStatusIdx &&
                              clsx(classes.cancel, classes.statusDetail))
                          }
                        >
                          {(item.name === "pending" &&
                            "Đơn đặt hàng đang chờ được xử lí") ||
                            (item.name === "processing" &&
                              "Nhân viên đang xử lí đơn đặt hàng") ||
                            (item.name === "completed" &&
                              "Đơn đặt hàng đã được nhân viên xử lí xong") ||
                            (item.name === "cancel" && "Đã hủy đơn đặt hàng")}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography
                          variant="subtitle1"
                          className={
                            (idx !== lastStatusIdx &&
                              clsx(classes.past, classes.status)) ||
                            (item.name === "pending" &&
                              idx === lastStatusIdx &&
                              clsx(classes.pending, classes.status)) ||
                            (item.name === "processing" &&
                              idx === lastStatusIdx &&
                              clsx(classes.processing, classes.status)) ||
                            (item.name === "completed" &&
                              idx === lastStatusIdx &&
                              clsx(classes.completed, classes.status)) ||
                            (item.name === "cancel" &&
                              idx === lastStatusIdx &&
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
            })
          : null}
      </Timeline>
    </Container>
  );
}
