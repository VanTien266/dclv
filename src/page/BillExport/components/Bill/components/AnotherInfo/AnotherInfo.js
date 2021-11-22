import React from "react";
import {
  CardContent,
  Grid,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle, BorderColor, CalendarToday } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "16px",
  },
  item: {
    marginBottom: theme.spacing(1),
  },
  note: {
    width: "100%",
    marginTop: theme.spacing(2),
    backgroundColor: "#fff",
    height: "100%",
    "& label": {
      color: theme.palette.primary.main,
    },
    "& .MuiInputBase-root": {
      ...theme.typography.subtitle1,
    },
  },
}));
function AnotherInfo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Thông tin khác
      </Typography>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <AccountCircle />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Nhân viên phụ trách</Typography>
                <Typography variant="subtitle1">Lưu Văn Tiến</Typography>
                <Typography variant="subtitle1">0826755114</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <CalendarToday />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Ngày xuất</Typography>
                <Typography variant="subtitle1">14/10/2020</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.item}>
              <Grid item xs={2}>
                <AccountCircle />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Nhân viên giao hàng</Typography>
                <Typography variant="subtitle1">Trần Trọng Nghĩa</Typography>
                <Typography variant="subtitle1">01296755114</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Grid container>
              <Grid item xs={2}>
                <BorderColor />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">Ghi chú</Typography>{" "}
              </Grid>
              <TextField
                label="Nội dung"
                multiline
                rows={7}
                // size="medium"
                defaultValue="Đây là ghi chú"
                variant="outlined"
                className={classes.note}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default AnotherInfo;
