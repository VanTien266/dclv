import React, {useEffect, useState} from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import staffApi from "../../../api/staffApi";

const useStyles = makeStyles(() => ({
  container: {
    
  },
  info: {

  },
  infoTitle: {
    textAlign: 'center',
    
  },
  titleInformation:{
    margin: '10px 0 10px 0'
  },
  information:{
    direction: "column",
  },
  textFieldInfo: {
    margin: "10px 0 10px 0",
  }
}));
function InfoStaffTable(props) {
    const classes = useStyles();
    const {infostaff} = props;
    // const [staffInfo, setStaffInfo] = useState([]);
    // useEffect(() => {
    //     const fetchStaffInfo = async () => {
    //         try {
    //           const response = await staffApi.getInfoById();
    //           console.log(response);
    //           setStaffInfo(response);
    //         }catch (error) {
    //           console.log("Failed to fetch staff list", error);
    //         }
    //     }
    //     fetchStaffInfo();
    //   }, []);
//   const handleClickChangePhone = () => {
//     console.log('Modal Change Phone');
//   }

//   const handleClickChangeAddress = () => {
//     console.log('Modal Change Addresss');
//   }

  return (
    <Box className={classes.container}>
      <Grid container spacing={2} className={classes.info}>
        <Grid xs={12} className={classes.infoTitle}>
          <Typography variant="h5" className={classes.titleInformation} >Thông tin cá nhân</Typography>
        </Grid>
        <Grid xs={12} className={classes.information} >
          <Typography className={classes.titleInfo}>Họ tên</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.name}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Số điện thoại</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.phone}
            InputProps={{
              readOnly: true,
            //   endAdornment: 
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="EditPhone"
            //       onClick={handleClickChangePhone}
            //       //onMouseDown={handleMouseDownPassword}
            //       edge="end"
            //     >
            //       <EditIcon />
            //     </IconButton>
            //   </InputAdornment>
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Email</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.email}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Giới tính</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.gender}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Ngày sinh</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.birthday}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Địa chỉ</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.address}
            InputProps={{
              readOnly: true,
            //   endAdornment: 
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="EditAddress"
            //       onClick={handleClickChangeAddress}
            //       //onMouseDown={handleMouseDownPassword}
            //       edge="end"
            //     >
            //       <EditIcon />
            //     </IconButton>
            //   </InputAdornment>
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Role</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue={infostaff.role}
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />    

        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoStaffTable;
