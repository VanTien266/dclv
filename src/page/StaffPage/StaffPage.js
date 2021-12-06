import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

import FilterBarStaff from "./components/FilterBarStaff"
import StaffList from "./components/StaffList";
import StaffHeader from "./components/StaffHeader";

const data = [
  {
    id: "ID1234",
    namestaff:"Nguyễn Văn Tĩnh",
    role:"Nhân viên bán hàng",
    age:"21",
    phone:"0387949125",
    email: "nguyenvantinh06@gmail.com",
    gender:"Nam",
  },
  {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên giao hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
  },
  {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên giao hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
  },
  {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên bán hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
  },
  {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên bán hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
  },
  {
      id: "ID1234",
      namestaff:"Nguyễn Văn Tĩnh",
      role:"Nhân viên giao hàng",
      age:"21",
      phone:"0387949125",
      email: "nguyenvantinh06@gmail.com",
      gender:"Nam",
    },
    
  
];
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

  //   const fetchStaff = () => {
  //     axios.get("stafflist").then((response) => {
  //       if (mounted) {
  //         setStaff(response.data.staffList);
  //         console.log(response.data.staffList);
  //       }
  //     });
  //   };

  //   fetchStaff();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);
  return (
    <div className={classes.root}>
      <FilterBarStaff />
      <StaffHeader /> 
      {/* {staff && (
        <StaffList className={classes.staffList} staff={staff} />
      )} */}
      {data.map((item ,idx) => {
            return <StaffList key={idx} staff={item}/>
        })}
    </div>
  );
}

export default StaffPage;