// import React from "react";
// import moment from "moment";
// import clsx from "clsx";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@material-ui/core";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         fontFamily: "'Roboto', sans-serif",
//         fontSize: "14px",
//         color: "#000040",
//     },
//     tableHead: { backgroundColor: "#B4B4C1"},
//     headStyle: { color: "#000040" },
//     tableBody: {
//         backgroundColor: "#F6F6F8",
//         // root: {
//         //       '&:nth-of-type(odd)': {
//         //         backgroundColor: theme.palette.action.hover,
//         //       },
//         //     },
//     },
    
//     content: {
//         padding: 0,
//     },
// //   textCode: {
// //     ...theme.typography.textCode,
// //     color: "#000040",
// //   },
// //   textItem: {
// //     ...theme.typography.textItem,
// //     textTransform: "capitalize",
// //     color: "#000040",
// //   },
// }));

// const tableTilteConfig = [
//   "ID",
//   "Tên nhân viên",
//   "Chức vụ",
//   "Tuổi",
//   "Số điện thoại",
//   "Email",
//   "Giới tính"

// ];
// function StaffList(props) {
//   const { className, staff } = props;

//   const classes = useStyles();
//   return (
//     <div className={clsx(classes.root, className)}>
//       <Card>
//         {/* <CardHeader title="Có 10 sản phẩm được tìm thấy" /> */}
//         <Divider />
//         <CardContent className={classes.content}>
//           <PerfectScrollbar>
//             <Table>
//               <TableHead className={classes.tableHead}>
//                 <TableRow>
//                   {tableTilteConfig.map((item, index) => (
//                     <TableCell key={index} className={classes.headStyle} align="left" >
//                       {item}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody className={classes.tableBody}>
//                 {staff.map((item) => (
//                     <TableRow hover key={item.id}>
//                       <TableCell className={classes.textItem}>
//                         {item.id}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.namestaff}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.role}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.age}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.phone}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.email}
//                       </TableCell>
//                       <TableCell className={classes.textItem}>
//                         {item.sex}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </PerfectScrollbar>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default StaffList;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "15px",
    color: "#000040",
    backgroundColor: "#F6F6F8",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[5],
      transition: "box-shadow 0.3s ease-in-out",
    },
  },
  verticalCenterEmail:{
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "20px"
  },
  verticalCenter: {
    direction: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonWidth: {
    minWidth: "24px",
    padding: "0px",
    height: "80%",
  },
  pLeft10: {
    paddingLeft: "10px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  headerTable: {
    textAlign: "left",
    color: "black",
    fontSize: "18px",
  },
  tableContentBlack: {
    color: "#000040",
    fontSize: "16px",
  },
  productScroll: {
    padding: "0",
    maxHeight: "500px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));

export default function StaffList({ staff }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={1}
        className={clsx(classes.orderId, classes.verticalCenter)}
      >
        <p>{staff.id}</p>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenter}>
        <p>{staff.namestaff}</p>
      </Grid>

      <Grid item xs={2} className={classes.verticalCenter}>
        <p>{staff.role}</p>
      </Grid>

      <Grid item xs={1} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>{staff.age}</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenter}>
        <p className={classes.verticalAlign}>{staff.phone}</p>
      </Grid>
      <Grid item xs={3} className={classes.verticalCenterEmail}>
        <p className={classes.verticalAlign}>{staff.email}</p>
      </Grid>
      <Grid item xs={1} className={classes.verticalCenterEmail}>
        <p className={classes.verticalAlign}>{staff.gender}</p>
      </Grid>
      
    </Grid>
  );
}
