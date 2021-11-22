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

const useStyles = makeStyles({
  timelineStyle: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    fontFamily: "'Roboto', sans-serif",
    padding: "10px",
    width: "100%",
    height: "100%"
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
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle1" className={classes.status}>
                  Chờ xử lý
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.statusDetail}
                >
                  Đơn hàng đang chờ được xử lí
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.status}>
                  DD/MM/YYYY
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={"primary"} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container>
              <Grid item xs={9}>
                <Typography
                  variant="subtitle1"
                  className={clsx(classes.status, classes.active)}
                >
                  Đang xử lý
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={clsx(classes.statusDetail, classes.active)}
                >
                  Nhân viên đang xử lí đơn hàng
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.status}>
                  DD/MM/YYYY
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle1" className={classes.status}>
                  Chờ xử lý
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.statusDetail}
                >
                  Đơn hàng đã được hoàn tất một phần
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.statusDetail}
                >
                  Đang đợi xử lí phần còn lại
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.status}>
                  DD/MM/YYYY
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle1" className={classes.status}>
                  Đang xử lý
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.statusDetail}
                >
                  Nhân viên xử lí phần còn lại
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.status}>
                  DD/MM/YYYY
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle1" className={classes.status}>
                  Đã xử lý xong
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.statusDetail}
                >
                  Đơn hàng đã được nhân viên xử lí xong
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.status}>
                  DD/MM/YYYY
                </Typography>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
