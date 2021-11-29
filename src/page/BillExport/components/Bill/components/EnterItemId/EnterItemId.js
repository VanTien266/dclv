import React from "react";
import { TextField } from "@material-ui/core";

function EnterItemId(props) {
  const { productId, handleProductIdChange } = props;

  const handleChange = (e) => {
    handleProductIdChange(e.target.value);
  };

  return (
    <TextField
      color="primary"
      id="input-with-icon-textfield"
      placeholder="Mã sản phẩm"
      fullWidth
      name="productId"
      value={productId || ""}
      onChange={handleChange}
    />
  );
}

export default EnterItemId;
