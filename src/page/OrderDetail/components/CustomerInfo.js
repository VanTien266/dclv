import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import {
  LocationOn,
  Email,
  Phone,
  Edit,
  BorderColor,
} from "@material-ui/icons";
import clsx from "clsx";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  customerInfo: {
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    padding: "10px",
    fontFamily: "'Roboto', sans-serif",
    color: "#000040",
    height: "100%",
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

export default function CustomerInfo(props) {
  const classes = useStyles();
  const history = useHistory();
  const role = localStorage.getItem("role");

  const handleClick = () => {
    history.push(`/order/orderEdit/${props.id}`);
  };

  return (
    <div className={classes.customerInfo}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h5" className={classes.title}>
            Thông tin khách hàng
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleClick}>
            <Edit color="primary" fontSize="large" />
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={9}>
          <table>
            <tbody>
              <tr>
                <td>
                  <LocationOn />
                </td>
                <td>
                  <Typography
                    component="p"
                    className={clsx(classes.infoTable, classes.name)}
                  >
                    {props.customer !== undefined ? props.customer.name : ""}
                  </Typography>
                  <Typography variant="subtitle1">
                    {props.customer !== undefined ? props.customer.address : ""}
                  </Typography>
                  {/* <Typography variant="subtitle1">
                    Đông Hòa - Dĩ An - Bình Dương
                  </Typography> */}
                </td>
              </tr>
              <tr>
                <td>
                  <Email />
                </td>
                <td>
                  <Typography variant="subtitle1">
                    {props.customer !== undefined ? props.customer.email : ""}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Phone />
                </td>
                <td>
                  <Typography variant="subtitle1">
                    {props.customer !== undefined ? props.customer.phone : ""}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.noteBox}>
            <BorderColor fontSize="large" /> Ghi chú
          </div>
        </Grid>
      </Grid>
      <Typography component="h6" className={classes.title}>
        Người nhận
      </Typography>
      <Grid container>
        <Grid item>
          <table>
            <tbody>
              <tr>
                <td>
                  <LocationOn />
                </td>
                <td>
                  <Typography
                    variant="subtitle1"
                    className={clsx(classes.infoTable, classes.name)}
                  >
                    {props.receiverName !== undefined ? props.receiverName : ""}
                  </Typography>
                  <Typography variant="subtitle1">
                    {props.receiverAddress !== undefined
                      ? props.receiverAddress
                      : ""}
                  </Typography>
                  {/* <Typography variant="subtitle1">
                    KP 6 - Tp Thủ Đức - Tp Hồ Chí Minh
                  </Typography> */}
                </td>
              </tr>
              <tr>
                <td>
                  <Phone />
                </td>
                <td>
                  <Typography variant="subtitle1">
                    {props.receiverPhone !== undefined
                      ? props.receiverPhone
                      : ""}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
