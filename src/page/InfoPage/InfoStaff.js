import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Box, Avatar, Typography, Button } from "@material-ui/core";

import ProfileCardComp from "../../components/CardProfile/ProfileCardComp";
import InfoStaffTable from "./components/InfoStaffTable";
import staffApi from "../../api/staffApi";

const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: "16px",
    },
    contain: {
        
    },
    buttonProfile: {
        direction: "column",
        
    },
    infoTable:{

    },
    ProfileCard: {
        marginBottom: "60px",
        marginLeft: "25px"
    }
}));

function InfoStaff() {
    const classes = useStyles();

    const [staffInfo, setStaffInfo] = useState([]);
    useEffect(() => {
        const fetchStaffInfo = async () => {
            try {
              const response = await staffApi.getInfoById();
              console.log(response);
              setStaffInfo(response);
            }catch (error) {
              console.log("Failed to fetch staff info", error);
            }
        }
        fetchStaffInfo();
      }, []);
    return (
        <Box className={classes.root}>
            <Grid container className={classes.contain} space={3} >
                <Grid item contain sm={3} md={3} xs={12} className={classes.buttonProfile}>
                    <Grid item sm={12} md={12} xs={12} className={classes.ProfileCard}>
                        <ProfileCardComp />
                    </Grid>
                    
                </Grid>

                <Grid item contain sm={1} md={1}>
                </Grid>

                <Grid item contain sm={6} md={6} xs={12} className={classes.infoTable}>
                {staffInfo.map((item, idx) => {
                    return <InfoStaffTable key={idx} infostaff={item} />
                    })}
                    {/* // <InfoStaffTable /> */}
                </Grid>

                <Grid item contain sm={2} md={2}>
                </Grid>
            </Grid>
        </Box>
        
    )
}

export default InfoStaff;
