import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
function EnterItemId() {
  return (
    <TextField
      color="primary"
      id="input-with-icon-textfield"
      placeholder="Mã sản phẩm"
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
      fullWidth
    />
  );
}

export default EnterItemId;
