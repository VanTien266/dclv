import React from 'react'
import Button from '@mui/material/Button';

import useStyles from './Dashboardstyles'


function Dashboard() {
    const classes = useStyles();
    return (
        <Button className={classes.root}>Hook</Button>
    )
}

export default Dashboard
