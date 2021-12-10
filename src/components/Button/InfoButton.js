import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Modal,
  Backdrop,
  Card,
  Typography,
  CardContent,
  InputLabel,
  TextField,
  Container,
  FormControl,
} from "@material-ui/core";
import clsx from "clsx";
import { Done, Cancel } from "@material-ui/icons";
import DefaultButton from "./DefaultButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    
    },
    infoButton: {
        width: '80%',
        border: "1px solid #DADADA",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
        marginTop: '15px',
        color: "#000040",
        marginLeft: "5px",
        "&:hover": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
            background: "#DADADA"
        },
        "&:active": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
            background: "#EAECFF",
            color: "#1B40FA",
        }

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
    formModal: {
        width: "30vw",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    titleModal:{
        textAlign: "center",
        color: "#000040"
    },
    btnColor: {
        color: "#A3A3A3",
        fontSize: 16,
    },
    btnSubmit: {
        textAlign: "center",
        backgroundColor: "#1B40FA",
        color: "#FFFFFF",
        marginTop: "10px",
        marginLeft: "50px",
        "&:active": {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
            background: "#EAECFF",
            color: "#1B40FA",
        }
    },
    buttonBox: {
        padding: 0,
        textAlign: "right",
        marginTop: "10px",
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
        marginRight: "10px"
      },
    btnCancelTitle: {
        ...theme.typography.buttonPrimary,
      },
}));

export default function InfoButton() {
    const classes = useStyles();
  
    const [open, setOpen] = useState(false);

    const handleOpenChangePassword = (e) => {
        e.stopPropagation();
        setOpen(true);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = (e) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (

    <div className={classes.root}>
        <Button className={classes.infoButton} onClick={handleOpenChangePassword}>
            Đổi mật khẩu
        </Button>

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
                <Typography gutterBottom variant="h6" className={classes.titleModal}>
                    Đổi mật khẩu
                </Typography>
                <form className={classes.formModal}>
                    <FormControl fullWidth margin="dense">
                        <InputLabel
                            htmlFor="password-current"
                            //error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                        {/* {'Current Password'} */}
                        </InputLabel>
                        <Typography gutterBottom variant="h6" className={classes.btnColor}>
                            Mật khẩu hiện tại
                        </Typography>
                        <TextField
                            id="password-current"
                            name="currentPass"
                            type="password"
                            variant="outlined"
                            // value={values.currentPass}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // error={Boolean(touched.currentPass && errors.currentPass)}
                        />
                        {/* <FormHelperText
                            error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                            {touched.currentPass && errors.currentPass
                            ? errors.currentPass
                            : ''}
                        </FormHelperText> */}
                    </FormControl>
                    <FormControl
                    fullWidth
                    margin="dense"
                    //   error={Boolean(touched.newPass && errors.newPass)}
                    >
                    <InputLabel
                        htmlFor="password-new"
                        // error={Boolean(touched.newPass && errors.newPass)}
                    >
                        {/* {'New Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Mật khẩu mới
                    </Typography>
                    <TextField
                        id="password-new"
                        name="newPass"
                        type="password"
                        variant="outlined"
                        // value={values.newPass}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // error={Boolean(touched.newPass && errors.newPass)}
                    />
                    
                    {/* <FormHelperText
                        error={Boolean(touched.newPass && errors.newPass)}
                    >
                        {touched.newPass && errors.newPass ? errors.newPass : ''}
                    </FormHelperText> */}
                    </FormControl>
                    <FormControl
                    fullWidth
                    margin="dense"
                    //   error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                    <InputLabel
                        htmlFor="password-confirm"
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {/* {'Confirm Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Xác nhận mật khẩu
                    </Typography>
                    <TextField
                        id="password-confirm"
                        name="confirmPass"
                        type="password"
                        variant="outlined"
                        // value={values.confirmPass}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                        className={classes.inputPassword}
                    />
                    
                    {/* <FormHelperText
                        error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {touched.confirmPass && errors.confirmPass
                        ? errors.confirmPass
                        : ''}
                    </FormHelperText> */}
                    </FormControl>
                    {/* <Container className={classes.buttonBox}>
                        <Button
                        type="submit"
                        variant="raised"
                        className={classes.btnSubmit}
                        //disabled={Boolean(!isValid || isSubmitting)}
                        >
                        </Button>
                    </Container> */}
                    <Container className={classes.buttonBox}>
                    <Button
                        startIcon={<Cancel />}
                        size="large"
                        className={classes.btnCancel}
                    >
                    <Typography variant="h6" className={classes.btnCancelTitle}>
                        Hủy
                    </Typography>
                    </Button>
                    <DefaultButton title="Xác nhận" icon={Done} />
                    </Container>
                
                </form>
            </CardContent>
        </Card>
    </Modal>
    </div>
);
}
