import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  LockOutlined,
  PhoneAndroid,
  AccountCircle,
  Lock,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {FormControl, InputLabel} from "@material-ui/core"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        BK Fabric
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://webservices.wkf.fr/editorial/medias/images/actu-77374-report-d_imposition-des.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/signin");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng kí
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Nhập địa chỉ Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Nhập mật khẩu"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="repassword"
              label="Nhập lại mật khẩu"
              type="password"
              id="repassword"
              autoComplete="current-password"
              placeholder="Nhập lại mật khẩu"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Số điện thoại"
              type="text"
              id="phone"
              autoComplete="phone-number"
              placeholder="Nhập SĐT"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroid />
                  </InputAdornment>
                ),
              }}
            /> */}
            <FormControl
                    fullWidth
                    margin="dense"
                    //   error={Boolean(touched.confirmPass && errors.confirmPass)}
                    >
                    <InputLabel
                        htmlFor="email-customer"
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
                        name="email-customer"
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
                    
            <FormControl
                    fullWidth
                    margin="dense"
                    //   error={Boolean(touched.newPass && errors.newPass)}
                    >
                    <InputLabel
                        htmlFor="telephone-customer"
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
                        name="telephone-customer"
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

            <FormControl fullWidth margin="dense" style={{marginRight: "10px"}} > 
                        <InputLabel
                            htmlFor="nameCustomer"
                            //error={Boolean(touched.currentPass && errors.currentPass)}
                        >
                        {/* {'Current Password'} */}
                        </InputLabel>
                        <Typography gutterBottom variant="h6" className={classes.btnColor}>
                            Họ tên
                        </Typography>
                        <TextField
                            required
                            id="standard-required"
                            name="nameCustomer"
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

                    <FormControl fullWidth margin="dense">
                        <InputLabel
                            htmlFor="address-customer"
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
                            name="address-customer"
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
                        htmlFor="password"
                        // error={Boolean(touched.newPass && errors.newPass)}
                    >
                        {/* {'New Password'} */}
                    </InputLabel>
                    <Typography gutterBottom variant="h6" className={classes.btnColor}>
                        Mật khẩu
                    </Typography>
                    <TextField
                        id="password"
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
                      Nhập lại mật khẩu
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Đăng kí
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signin" variant="body2">
                  Quay lại đăng nhập
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
