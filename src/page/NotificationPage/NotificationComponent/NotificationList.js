import React from "react";
import moment from "moment";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tableHead: { backgroundColor: "#B4B4C1"},
  headStyle: { ...theme.typography.titleM, color: "#000040" },
  tableBody: {
    backgroundColor: "#F6F6F8",
    // root: {
    //       '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //       },
    //     },
  },
  cardHeader: {
    ...theme.typography.textParagraph,
  },
  content: {
    padding: 0,
  },
  textCode: {
    ...theme.typography.textCode,
    color: "#000040",
  },
  textItem: {
    ...theme.typography.textItem,
    textTransform: "capitalize",
    color: "#000040",
  },
}));
const tableTilteConfig = [
  "Thời gian",
  "Nội dung",
];
function NotificationsList(props) {
  const { className, notification } = props;

  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Card>
        {/* <CardHeader title="Có 10 sản phẩm được tìm thấy" /> */}
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <Table>
              <TableHead className={classes.tableHead}>
                <TableRow>
                  {tableTilteConfig.map((item, index) => (
                    <TableCell key={index} className={classes.headStyle} align="left" >
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {notification.map((item) => (
                    <TableRow hover key={item.id}>
                      <TableCell className={classes.textItem}>
                        {moment(item.dateAdded).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell className={classes.textItem}>
                        {item.content}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
}

export default NotificationsList;

// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#B4B4C1",
//     color: "#000040",
//     fontSize: 18,
//     fontWeight: 700,
//     lineHeight: "24px",
//     letterSpacing: "0.003em",
//   },
//   body: {
//     fontSize: 16,
//     fontWeight: 500,
//     lineHeight: "24px",
//     letterSpacing: "0.003em",
//   },
//   // tableHead: { backgroundColor: "#B4B4C1" },
//   // headStyle: { ...theme.typography.titleM, color: "#000040" },
//   // tableBody: {
//   //   backgroundColor: "#F6F6F8",
//   // },
//   // cardHeader: {
//   //   ...theme.typography.textParagraph,
//   // },
//   // content: {
//   //   padding: 0,
//   // },
//   // textCode: {
//   //   ...theme.typography.textCode,
//   //   color: "#000040",
//   // },
//   // textItem: {
//   //   ...theme.typography.textItem,
//   //   textTransform: "capitalize",
//   //   color: "#000040",
//   // },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData(date, content) {
//   return { date, content };
// }

// const rows = [
//   createData('14/11/2021', 'Nhan vien Nguyen Van A lien he quan ly'),
//   createData('14/11/2021', 'Nhan vien Nguyen Van A lien he quan ly'),
//   createData('14/11/2021', 'Nhan vien Nguyen Van A lien he quan ly'),
//   createData('14/11/2021', 'Nhan vien Nguyen Van A lien he quan ly'),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function NotificationsList() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead className={classes.tableHead}>
//           <TableRow>
//             <StyledTableCell>Thời gian</StyledTableCell>
//             <StyledTableCell align="left">Nội dung</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell align="left">{row.date}</StyledTableCell>
//               <StyledTableCell align="left">{row.content}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
