import React from 'react'
import Button from '@mui/material/Button';

import useStyles from './Dashboardstyles'
import DeleteIcon from '@mui/icons-material/Delete';

function Dashboard() {
    const classes = useStyles();
    return (
        <DeleteIcon className={classes.icons} />

        
    )
}

export default Dashboard
