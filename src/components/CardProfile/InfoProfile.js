import React from "react";
import { Box, Typography, Button, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

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
function InfoProfile() {
  const classes = useStyles();

  const handleClickChangePhone = () => {
    console.log('Modal Change Phone');
  }

  const handleClickChangeAddress = () => {
    console.log('Modal Change Addresss');
  }

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
            defaultValue="Nguyễn Văn Tĩnh"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Số điện thoại</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="0387949125"
            InputProps={{
              readOnly: true,
              endAdornment: 
              <InputAdornment position="end">
                <IconButton
                  aria-label="EditPhone"
                  onClick={handleClickChangePhone}
                  //onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Email</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="nguyenvantinh06@gmail.com"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Giới tính</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="Nam"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Ngày sinh</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="23/03/2000"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Địa chỉ</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="Khu phố Phú Thứ, Thị trấn Phú Thứ, Tây Hòa, Phú Yên"
            InputProps={{
              readOnly: true,
              endAdornment: 
              <InputAdornment position="end">
                <IconButton
                  aria-label="EditAddress"
                  onClick={handleClickChangeAddress}
                  //onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }}
            variant="outlined"
            fullWidth
          />

          <Typography className={classes.titleInfo}>Role</Typography>
          <TextField className={classes.textFieldInfo}
            id="outlined-read-only-input"
            defaultValue="Quản lí"
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

export default InfoProfile;
