import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
// import { Grid, Typography } from "@material-ui/core";
import FilterBarStaff from "./components/FilterBarStaff";
import StaffList from "./components/StaffList";
import StaffHeader from "./components/StaffHeader";
import staffApi from "../../api/staffApi";

const useStyles = makeStyles((theme) => ({
  // staffList: {
  //   marginTop: "10px",
  // }
}));

function StaffPage() {
  const classes = useStyles();
  const [staff, setStaff] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [filter, setFilter] = useState(["ADMIN", "SALESMAN", "SHIPPER"]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await staffApi.getAll();
        const data = response.filter((i) => filter.includes(i.role));
        console.log({ data });
        setStaff(data);
      } catch (error) {
        console.log("Failed to fetch staff list", error);
      }
    };
    fetchStaff();
  }, [filter, refresh]);
  return (
    <div className={classes.root}>
      <FilterBarStaff
        filter={filter}
        setFilter={setFilter}
        setRefresh={setRefresh}
      />
      <StaffHeader />
      {staff && <StaffList className={classes.staffList} staff={staff} />}
    </div>
  );
}

export default StaffPage;
