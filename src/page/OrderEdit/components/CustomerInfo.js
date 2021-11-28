import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Input } from "@material-ui/core";
import { LocationOn, Email, Phone, Notes, Edit } from "@material-ui/icons";
import { useState } from "react";

const userInfo = {
  name: "Lưu Văn Tiến",
  address: "KTX Khu A",
  email: "tien.luu.van@hcmut.edu.vn",
  province: "Đông Hòa - Dĩ An - Bình Dương",
  phone: "0826755114",
  receiverName: "Lưu Văn Tiến",
  receiverAddress: "KTX Khu A",
  receiverProvince: "Đông Hòa - Dĩ An - Bình Dương",
  receiverPhone: "01296755114",
};

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
  inpWidth: {
    width: "100%",
  },
});

export default function CustomerInfo() {
  const classes = useStyles();
  const [name, setName] = useState(userInfo.name);
  const [address, setAddress] = useState(userInfo.address);
  const [province, setProvince] = useState(userInfo.province);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);
  const [receiverName, setReceiverName] = useState(userInfo.receiverName);
  const [receiverAddress, setReceiverAddress] = useState(
    userInfo.receiverAddress
  );
  const [receiverProvince, setReceiverProvince] = useState(
    userInfo.receiverProvince
  );
  const [receiverPhone, setReceiverPhone] = useState(userInfo.receiverPhone);
  return (
    <div className={classes.customerInfo}>
      <form>
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
          <Grid item xs={8}>
            <table className={classes.inpWidth}>
              <tbody>
                <tr>
                  <td>
                    <LocationOn />
                  </td>
                  <td>
                    <div>
                      <Input
                        defaultValue={name}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                    <div>
                      <Input
                        defaultValue={address}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                    <div>
                      <Input
                        defaultValue={province}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Email />
                  </td>
                  <td>
                    <Input
                      defaultValue={email}
                      inputProps={{ "aria-label": "description" }}
                      className={classes.inpWidth}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Phone />
                  </td>
                  <td>
                    <Input
                      defaultValue={phone}
                      inputProps={{ "aria-label": "description" }}
                      className={classes.inpWidth}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.noteBox}>
              <Notes fontSize="large" /> Ghi chú
            </div>
          </Grid>
        </Grid>
        <Typography component="h6" className={classes.title}>
          Người nhận
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <table className={classes.inpWidth}>
              <tbody>
                <tr>
                  <td>
                    <LocationOn />
                  </td>
                  <td>
                    <div>
                      <Input
                        defaultValue={receiverName}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                    <div>
                      <Input
                        defaultValue={receiverAddress}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                    <div>
                      <Input
                        defaultValue={receiverProvince}
                        inputProps={{ "aria-label": "description" }}
                        className={classes.inpWidth}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Phone />
                  </td>
                  <td>
                    <Input
                      defaultValue={receiverPhone}
                      inputProps={{ "aria-label": "description" }}
                      className={classes.inpWidth}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
