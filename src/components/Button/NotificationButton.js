import React from "react";
import { IconButton } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

function NotificationButton() {
  return (
    <div>
      <IconButton>
        <Notifications fontSize="large" color="primary" />
      </IconButton>
    </div>
  );
}

export default NotificationButton;
