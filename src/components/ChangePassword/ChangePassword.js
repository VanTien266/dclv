import React from "react";
import Typography from "@material-ui/core/Typography";
import FormPasswordReset from "./Components/FormPasswordReset";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  contain: {
    direction: "column",
    alignItems: "center",
    textAlign: "center",
  }
  
}));

function ChangePassword() {
  const classes = useStyles();
  return (
    <div className={classes.contain}>
      <Typography variant="title" styles={{textAlign: 'center'}}>
        Đổi mật khẩu
      </Typography>
      <FormPasswordReset />
    </div>
  );
}

export default ChangePassword;

// import React, {useState, useEffect} from "react";
// import { Box, Typography, Button, TextField, InputAdornment, IconButton } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import { Grid } from "@material-ui/core";
// import EditIcon from '@material-ui/icons/Edit';

// const useStyles = makeStyles(() => ({
//   container: {
    
//   },
//   info: {

//   },
//   infoTitle: {
//     textAlign: 'center',
    
//   },
//   titleInformation:{
//     margin: '10px 0 10px 0'
//   },
//   information:{
//     direction: "column",
//   },
//   textFieldInfo: {
//     margin: "10px 0 10px 0",
//   }
// }));
// function ChangePassword() {
//   const classes = useStyles();

//   const handleClickChangePhone = () => {
//     console.log('Modal Change Phone');
//   }

//   const handleClickChangeAddress = () => {
//     console.log('Modal Change Addresss');
//   }

//   return (
//     <Box className={classes.container}>
//       <Grid container spacing={2} className={classes.info}>
//         <Grid xs={12} className={classes.infoTitle}>
//           <Typography variant="h5" className={classes.titleInformation}>Đổi mật khẩu</Typography>
//         </Grid>
//         <Grid xs={12} className={classes.information} >
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <TextField
//               error={hasError("email")}
//               helperText={hasError("email") ? formState.errors.email[0] : null}
//               onChange={handleChange}
//               value={formState.values.email || ""}
//               name="email"
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Địa chỉ email"
//               autoComplete="email"
//               autoFocus
//               placeholder="Nhập địa chỉ Email"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <AccountCircle />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               error={hasError("password")}
//               helperText={
//                 hasError("password") ? formState.errors.password[0] : null
//               }
//               onChange={handleChange}
//               value={formState.values.password || ""}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Mật khẩu"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               placeholder="Nhập mật khẩu"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Nhớ tài khoản"
//             />
//             <Button
//               disabled={!formState.isValid}
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Đăng nhập
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Quên mật khẩu?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Đăng kí tài khoản"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//       </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default ChangePassword;

