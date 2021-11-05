import 'date-fns';
import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import {createMuiTheme} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
  row: {
    marginTop: 8,
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: 8,
  },
  exportButton: {
    marginRight: 8,
  },
  searchInput: {
    marginRight: 8,
  },
  formControl: {
    margin: 25,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  date: {
    marginTop: 3,
  },
  range: {
    marginTop: 13,
  },
}));

const DatePicker = (props) => {
  const {
    className,
    // startDate,
    // setStartDate,
    // finishDate,
    // setFinishDate,
    priceFilter,
    setPriceFilter,
    statusFilter,
    setStatusFilter,
    tabs,
    ...rest
  } = props;
  const [tabValue, setTabValue] = React.useState(statusFilter);
  const [rangeValue, rangeSetValue] = React.useState(priceFilter);
  

  const classes = useStyles();

  const handleChangeTab = (e, value) => {
    setTabValue(value);
    setStatusFilter(value);
  };
  // const handleDateChange = (date) => {
  //   setStartDate(date);
  // };
  // const handleDateChangeFinish = (date) => {
  //   setFinishDate(date);
  // };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12} m={2}>
          <div className={classes}>
            <Typography className={classes.padding} />
          </div>
        </Grid>
        <Grid className={classes.date} item lg={3} sm={6} xl={3} xs={12} m={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                id="date-picker-dialog"
                label={<span style={{ opacity: 0.6 }}>Start Date</span>}
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid className={classes.date} item lg={3} sm={6} xl={3} xs={12} m={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                id="date-picker-dialog-finish"
                label={<span style={{ opacity: 0.6 }}>Finish Date</span>}
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default DatePicker;