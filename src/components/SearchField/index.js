import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "25px",
    paddingLeft: "10px",
    paddingRight: "12px",
  },
});

export default function SearchField() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <TextField
          className={classes.textField}
          id="input-with-icon-textfield"
          placeholder="Tìm kiếm"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search/>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Box>
    </>
  );
}
