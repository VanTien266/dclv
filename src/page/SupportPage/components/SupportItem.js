import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Modal,
  Backdrop,
  Card,
  Typography,
  CardContent,
  InputLabel,
  TextField,
  Container,
} from "@material-ui/core";
import clsx from "clsx";
import { Done, Cancel } from "@material-ui/icons";
import DefaultButton from "../../../components/Button/DefaultButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  orderId: {
    color: "#000040",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0px",
  },
  productList: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonWidth: {
    minWidth: "24px",
    padding: "0px",
    height: "80%",
    color: "blue",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  productScroll: {
    padding: "0",
    maxHeight: "500px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  btnCancel: {
    backgroundColor: "#EAECFF",
    color: "#696983",
    "&:hover": {
      backgroundColor: "red",
      color: "black",
    },
    textTransform: "none",
    padding: theme.spacing(1.5),
    marginRight: "10px",
  },
  btnCancelTitle: {
    ...theme.typography.buttonPrimary,
  },
  formModal: {
    width: "40vw",
  },
  feedbackContent: {
    padding: 0,
    marginBottom: "20px",
  },
  buttonBox: {
    padding: 0,
    textAlign: "right",
  },
  inpBoxWidth: {
    width: "100%"
  },
  titleModal: {
    textAlign: "center",
    color: "#000040",
  },
  btnColor: {
    color: "black",
  },
  statusOk: {
    color: "#5A9E4B",
  },
  statusNotOk: { color: "#D19431" },
  requestWidth: {
    maxWidth: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
}));

export default function SupportItem(props) {
  const { item } = props;
  console.log(item);
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setOpen(open => !open);
  };

  const handleClose = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setOpen(open => !open);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    //Seperate onClick in child and parents component
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Grid container className={classes.root} onClick={handleOpen}>
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>MYC{item.supportId}</p>
      </Grid>
      <Grid
        item
        xs={2}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>MĐH{item.order.orderId}</p>
      </Grid>
      <Grid item xs={2} className={classes.verticalCenter}>
        <p>{item.customer.name}</p>
      </Grid>

      <Grid item xs={2} className={classes.productList}>
        <p>{item.customer.phone}</p>
      </Grid>

      <Grid item xs={2} className={classes.verticalCenter}>
        <p className={clsx(classes.verticalAlign, classes.requestWidth)}>{item.request}</p>
      </Grid>
      <Grid item xs={2} className={classes.productList}>
        {item.status === false ? (
          <Typography className={classes.statusNotOk}>
            Chưa phản hồi
          </Typography>
        ) : (
          <Typography className={classes.statusOk}>Đã phản hồi</Typography>
        )}
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              className={classes.titleModal}
            >
              Chi tiết yêu cầu hỗ trợ
            </Typography>
            <form action="" className={classes.formModal}>
              <Container className={classes.feedbackContent}>
                <InputLabel htmlFor="order-id">
                  <Typography
                    gutterBottom
                    variant="h6"
                    className={classes.btnColor}
                  >
                    Mã đơn đặt hàng
                  </Typography>
                </InputLabel>
                <TextField
                  id="order-id"
                  variant="outlined"
                  defaultValue={"MĐH" + item.order.orderId}
                  className={classes.inpBoxWidth}
                ></TextField>
                <InputLabel htmlFor="request-content">
                  <Typography
                    gutterBottom
                    variant="h6"
                    className={classes.btnColor}
                  >
                    Nội dung yêu cầu
                  </Typography>
                </InputLabel>
                <TextField
                  id="request-content"
                  variant="outlined"
                  defaultValue={item.request}
                  multiline
                  rows={4}
                  className={classes.inpBoxWidth}
                ></TextField>
                <InputLabel htmlFor="reply-content">
                  <Typography
                    gutterBottom
                    variant="h6"
                    className={classes.btnColor}
                  >
                    Nội dung phản hồi
                  </Typography>
                </InputLabel>
                <TextField
                  id="reply-content"
                  variant="outlined"
                  defaultValue={item.response}
                  multiline
                  rows={4}
                  className={classes.inpBoxWidth}
                ></TextField>
              </Container>
              <Container className={classes.buttonBox}>
                <Button
                  startIcon={<Cancel />}
                  size="large"
                  className={classes.btnCancel}
                  onClick={handleClose}
                >
                  <Typography variant="h6" className={classes.btnCancelTitle}>
                    Đóng
                  </Typography>
                </Button>
              </Container>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </Grid>
  );
}
