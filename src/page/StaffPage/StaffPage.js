import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
// import { Grid, Typography } from "@material-ui/core";
import FilterBarStaff from "./components/FilterBarStaff"
import StaffList from "./components/StaffList";
import StaffHeader from "./components/StaffHeader";
import staffApi from "../../api/staffApi";

const useStyles = makeStyles((theme) => ({
  
  staffList: {
    marginTop: "16px",
  }
}));

function StaffPage() {
  const classes = useStyles();
  const [staff, setStaff] = useState([]);
  // useEffect(() => {
  //   let mounted = true;

  //   const fetchStaff = async () => {
  //     const params = {};
  //     const response = await staffApi.getAll(params);
  //     if (mounted) {
  //       // setProduct(handleFilter(response));
  //       setData(response);
  //     }
  //   };
  //   fetchStaff();
  //   return () => {
  //     mounted = false;
  //   };
  // });
  useEffect(() => {
    const fetchStaff = async () => {
        try {
          const response = await staffApi.getAll();
          console.log(response);
          setStaff(response);
        }catch (error) {
          console.log("Failed to fetch staff list", error);
        }
    }
    fetchStaff();
  }, []);
  return (
    <div className={classes.root}>
      <FilterBarStaff />
      <StaffHeader /> 
      {staff && (
        <StaffList className={classes.staffList} staff={staff} />
      )}
      {/* {data.map((item ,idx) => {
            return <StaffList key={idx} staff={item}/>
        })} */}
    </div>
  );
}

export default StaffPage;