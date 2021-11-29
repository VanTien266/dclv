import React, { Fragment } from "react";
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
  capitalize: {
    textTransform: "capitalize",
  },
}));

function Filter(props) {
  const { handleFilterChange, filter, data } = props;
  const classes = useStyles();

  const getWareHouseList = () =>
    Array.from(new Set(data.map((item) => item.warehouseId)));
  const getTypeList = () =>
    Array.from(new Set(data.map((item) => item.item.fabricType.name)));
  const getLotList = () => Array.from(new Set(data.map((item) => item.lot)));

  const handleWareHouseChange = (e) => {
    handleFilterChange({ ...filter, warehouse: e.target.value });
  };
  const handleFabricTypeChange = (e) => {
    handleFilterChange({ ...filter, type: e.target.value });
  };
  const handleLotChange = (e) => {
    handleFilterChange({ ...filter, lot: e.target.value });
  };
  return (
    <Fragment>
      {/* Warehouse filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Kho</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter.warehouse}
          onChange={handleWareHouseChange}
          label="Kho"
        >
          <MenuItem className={classes.input} value="">
            <em>None</em>
          </MenuItem>
          {getWareHouseList().map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Fabric type filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Loại vải</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter.type}
          onChange={handleFabricTypeChange}
          label="Loại vải"
          className={classes.capitalize}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getTypeList().map((item) => (
            <MenuItem value={item} key={item} className={classes.capitalize}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Lot filter */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Lô vải</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter.lot}
          onChange={handleLotChange}
          label="Lô vải"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {getLotList().map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
}

export default Filter;
