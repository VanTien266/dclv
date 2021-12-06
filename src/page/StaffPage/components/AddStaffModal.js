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
  MenuItem,
  Box
} from "@material-ui/core";
import clsx from "clsx";
import { Done, Cancel } from "@material-ui/icons";
import DefaultButton from "../../../components/Button/DefaultButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
    formSelect: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textBirthday:{

    },
    nameStaff: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

const genders = [
    {
      value: "Nam",
    },
    {
        value: "Nữ",
    },
    
  ];

const roles = [
    {
      value: "Nhân viên bán hàng",
    },
    {
        value: "Nhân viên giao hàng",
    },
    
  ];
  
export default function AddStaffModal() {
    const classes = useStyles();
  
    const [open, setOpen] = useState(false);
    const [gender, setGender] = React.useState('');
    const [role, setRole] = React.useState('');

    const handleSelectGender = (event) => {
        setGender(event.target.value);
    };
    const handleSelectRole = (event) => {
        setRole(event.target.value);
    };

    const handleOpenAddStaff = (e) => {
        e.stopPropagation();
        setOpen(true);
        console.log("Click Add Staff");
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
        <DefaultButton size="large" title="Thêm nhân viên" icon={AddCircleIcon} clickEvent={handleOpenAddStaff} />  
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
                    Thêm nhân viên mới
                </Typography>
                <form className={classes.formModal} autoComplete="off">
                <Box className={classes.nameStaff}>
                    <FormControl fullWidth margin="dense" style={{marginRight: "10px"}} > 
                        <InputLabel
                            htmlFor="firstname-staff"
                            //error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                        {/* {'Current Password'} */}
                        </InputLabel>
                        <Typography gutterBottom variant="h6" className={classes.btnColor}>
                            Họ, tên đệm
                        </Typography>
                        <TextField
                            required
                            id="standard-required"
                            name="firstname-staff"
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

                    <FormControl fullWidth margin="dense" style={{marginLeft: "10px"}}>
                        <InputLabel
                            htmlFor="lastname-staff"
                            //error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                        {/* {'Current Password'} */}
                        </InputLabel>
                        <Typography gutterBottom variant="h6" className={classes.btnColor}>
                            Tên
                        </Typography>
                        <TextField
                            required
                            id="standard-required"
                            name="lastname-staff"
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

                </Box>
                    
                    <FormControl
                    fullWidth
                    margin="dense"
                    //   error={Boolean(touched.newPass && errors.newPass)}
                    >
                    <InputLabel
                        htmlFor="telephone-staff"
                        // error={Boolean(touched.newPass && errors.newPass)}
                    >
                        {/* {'New Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Số điện thoại
                    </Typography>
                    <TextField
                        required
                        id="standard-required"
                        name="telephone-staff"
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
                        htmlFor="email-staff"
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {/* {'Confirm Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Email
                    </Typography>
                    <TextField
                        required
                        id="standard-required"
                        name="email-staff"
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

                    <Box className={classes.formSelect}>
                    <FormControl 
                    fullWidth
                    margin="dense"
                    style={{marginRight: "10px"}}
                    //   error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                    <InputLabel
                        htmlFor="email-staff"
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {/* {'Confirm Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Giới tính
                    </Typography>
                    <TextField
                        id="outlined-select-gender"
                        select
                        value={gender}
                        onChange={handleSelectGender}
                        variant="outlined"
                        >
                        {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    </FormControl>

                    <FormControl
                    fullWidth
                    margin="dense"
                    style={{marginLeft: "10px"}}
                    //   error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                    <InputLabel
                        htmlFor="email-staff"
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {/* {'Confirm Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Ngày sinh
                    </Typography>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue=""
                        className={classes.textBirthday}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                    />
                    </FormControl>
                    </Box>

                    <FormControl fullWidth margin="dense">
                        <InputLabel
                            htmlFor="address-staff"
                            //error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                        {/* {'Current Password'} */}
                        </InputLabel>
                        <Typography gutterBottom variant="h6" className={classes.btnColor}>
                            Địa chỉ
                        </Typography>
                        <TextField
                            required
                            id="standard-required"
                            name="address-staff"
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
                    style={{marginBottom: "10px"}}
                    //   error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                    <InputLabel
                        htmlFor="email-staff"
                        // error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                        {/* {'Confirm Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Role
                    </Typography>
                    <TextField
                        id="outlined-select-gender"
                        select
                        value={role}
                        onChange={handleSelectRole}
                        variant="outlined"
                        >
                        {roles.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
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
