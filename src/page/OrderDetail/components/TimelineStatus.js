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
import { Typography, Container } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  timelineStyle: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
    padding: "10px",
    width: "100%"
  },
  title: {
    color: "#000040",
    fontWeight: "bold",
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
  active: {
    color: "#4470B0",
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

export default function TimelineStatus() {
  const classes = useStyles();
  return (
    <Container className={classes.timelineStyle}>
      <Typography variant="h5" className={classes.title}>
        Trạng thái
      </Typography>
      <Timeline className={classes.timelineMargin}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className={classes.status}>Chờ xử lý</p>
            <p className={classes.statusDetail}>Đơn hàng đang chờ được xử lí</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={"primary"} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className={clsx(classes.status, classes.active)}>Đang xử lý</p>
            <p className={clsx(classes.statusDetail, classes.active)}>
              Nhân viên đang xử lí đơn hàng
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className={classes.status}>Chờ xử lý</p>
            <p className={classes.statusDetail}>
              Đơn hàng đã được hoàn tất một phần
            </p>
            <p className={classes.statusDetail}>Đang đợi xử lí phần còn lại</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className={classes.status}>Đang xử lý</p>
            <p className={classes.statusDetail}>Nhân viên xử lí phần còn lại</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <p className={classes.status}>Đã xử lý xong</p>
            <p className={classes.statusDetail}>
              Đơn hàng đã được nhân viên xử lí xong
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
