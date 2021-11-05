import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';

const gioitinh = [
    {
      value: 'Nam',
      label: '$',
    },
    {
      value: 'Nữ',
      label: '€',
    },
  ];

const useStyles = makeStyles(() => ({
    textInfo: {
        color: '#000040',
        fontSize: '20px'
    }
  }));


function InfoComponents() {
    const classes = useStyles();

    const [gioitinh, setgioitinh] = React.useState('Nam');
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Typography variant="body1">Thông tin cá nhân</Typography>

            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                value={value}
                onChange={handleChange}
                variant="filled"
            />
            <TextField
                id="role-staff"
                label="Role"
                defaultValue="Nhân viên bán hàng"
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
            />
            <TextField
                id="standard-select-currency"
                select
                label="Giới tính"
                value={gioitinh}
                onChange={handleChange}
                fullWidth={true}
            />

        </>
        

    );
}

export default InfoComponents;