import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import CustomCheckbox from "../../../components/Button/CustomCheckbox";
import SearchField from "../../../components/SearchField";
import NotificationButton from "../../../components/Button/NotificationButton";
import DefaultButton from "../../../components/Button/DefaultButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddStaffModal from "./AddStaffModal";

const useStyles = makeStyles(() => ({
  checkboxText: {
    fontSize: 14,
  },
  notiSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxCustom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function FilterBarStaff(props) {
  const classes = useStyles();
  const { filter, setFilter, setRefresh } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item container md={6} sm={6} xs={12}>
          <Grid item md={4} sm={4} xs={4} className={classes.checkBoxCustom}>
            <CustomCheckbox
              filter={filter}
              setFilter={setFilter}
              role="SALESMAN"
            />
            <Typography variant="h6" className={classes.checkboxText}>
              Nhân viên bán hàng
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={4} className={classes.checkBoxCustom}>
            <CustomCheckbox
              filter={filter}
              setFilter={setFilter}
              role="SHIPPER"
            />
            <Typography variant="h6" className={classes.checkboxText}>
              Nhân viên giao hàng
            </Typography>
          </Grid>
          <Grid item md={4} sm={4} xs={4} className={classes.checkBoxCustom}>
            <CustomCheckbox
              filter={filter}
              setFilter={setFilter}
              role="ADMIN"
            />
            <Typography variant="h6" className={classes.checkboxText}>
              Quản lý
            </Typography>
          </Grid>
        </Grid>
        <Grid item container md={2} sm={3} xs={12}>
          <AddStaffModal setRefresh={setRefresh} />
        </Grid>
        <Grid
          item
          container
          md={4}
          sm={3}
          xs={12}
          className={classes.notiSearch}
        >
          <Grid item xs={2}>
            <NotificationButton />
          </Grid>
          <Grid item xs={10}>
            <SearchField />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FilterBarStaff;
