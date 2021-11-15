import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { LocationOn, Email, Phone, Notes, Edit } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles({
  info: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    padding: "10px",
    fontFamily: "'Roboto', sans-serif",
    color: "#000040",
  },
  infoTable: {
    margin: "0px",
  },
  title: {
    color: "#000040",
    fontWeight: "bold",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  noteBox: {
    display: "flex",
    direction: "row",
    lineHeight: "40px",
    fontWeight: "bold",
  },
});

export default function CustomerInfo() {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h5" className={classes.title}>
            Thông tin khách hàng
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button>
            <Edit color="primary" fontSize="large" />
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={9}>
          <table>
            <tr>
              <td>
                <LocationOn />
              </td>
              <td>
                <Typography
                  component="p"
                  className={clsx(classes.infoTable, classes.name)}
                >
                  Lưu Văn Tiến
                </Typography>
                <Typography component="p" className={classes.infoTable}>
                  KTX Khu B
                </Typography>
                <Typography component="p" className={classes.infoTable}>
                  Đông Hòa - Dĩ An - Bình Dương
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Email />
              </td>
              <td>tien.luu.van@hcmut.edu.vn</td>
            </tr>
            <tr>
              <td>
                <Phone />
              </td>
              <td>0826755114</td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.noteBox}>
            <Notes fontSize="large" /> Ghi chú
          </div>
        </Grid>
      </Grid>
      <Typography component="h6" className={classes.title}>
        Người nhận
      </Typography>
      <Grid container>
        <Grid item>
          <table>
            <tr>
              <td>
                <LocationOn />
              </td>
              <td>
                <Typography
                  variant="p"
                  className={clsx(classes.infoTable, classes.name)}
                >
                  Lưu Văn Tiến
                </Typography>
                <Typography component="p" className={classes.infoTable}>
                  KTX khu A
                </Typography>
                <Typography component="p" className={classes.infoTable}>
                  KP 6 - Tp Thủ Đức - Tp Hồ Chí Minh
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Phone />
              </td>
              <td>01296755114</td>
            </tr>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
