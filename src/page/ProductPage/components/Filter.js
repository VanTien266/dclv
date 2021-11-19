import React, { Fragment, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    padding: "8px",
  },
}));

function Filter() {
  const classes = useStyles();
  const [wareHouseId, setWareHouseId] = useState("");
  const [status, setStatus] = useState("");
  const [fabricType, setFabricType] = useState("");
  const [color, setColor] = useState("");
  const [lot, setLot] = useState("");

  const handleWareHouseChange = (e) => {
    setWareHouseId(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleFabricTypeChange = (e) => {
    setFabricType(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleLotChange = (e) => {
    setLot(e.target.value);
  };
  return (
    <Fragment>
      {/* Warehouse filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Kho</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={wareHouseId}
          onChange={handleWareHouseChange}
          label="Kho"
        >
          <MenuItem className={classes.input} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      {/* Status filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Trạng thái
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={status}
          onChange={handleStatusChange}
          label="Trạng thái"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      {/* Fabric type filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Loại vải</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={fabricType}
          onChange={handleFabricTypeChange}
          label="Loại vải"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      {/* Fabric color filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Màu vải</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={color}
          onChange={handleColorChange}
          label="Màu vải"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
      {/* Lot filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Lô vải</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={lot}
          onChange={handleLotChange}
          label="Lô vải"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
}

export default Filter;
