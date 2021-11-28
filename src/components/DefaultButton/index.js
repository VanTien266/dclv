import clsx from "clsx";
import { Button, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.btnBg,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#1B40FA",
    },
    textTransform: "none",
    padding: theme.spacing(1.5),
  },
  btnTitle: {
    ...theme.typography.buttonPrimary,
  },
}));

export default function DefaultButton(props) {
  const { icon: Icon, title } = props;
  const classes = useStyles();

  return (
    <Button startIcon={<Icon />} size="large" className={clsx(classes.root)}>
      <Typography variant="h6" color="secondary" className={classes.btnTitle}>
        {title}
      </Typography>
    </Button>
  );
}