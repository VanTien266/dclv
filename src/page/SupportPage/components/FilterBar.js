import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";
import DateFilter from "../../../components/DateFilter";
import SearchField from "../../../components/SearchField";
import { Notifications } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
  },

  verticalCenter: {
    direction: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function FilterBar() {
  const [statusFilter, setStatusFilter] = useState("");

  const handleChange = (event) => {
    setStatusFilter(event.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={statusFilter}
              label="Trạng thái"
              onChange={handleChange}
            >
              <option value={"pending"}>Đang xử lý</option>
              <option value={"complete"}>Đã xử lý</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <DateFilter />
        </Grid>
        <Grid container item xs={3}>
          <Grid item xs={2} className={classes.verticalCenter}>
            <Button>
              <Notifications fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={10} className={classes.verticalCenter}>
            <SearchField />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
