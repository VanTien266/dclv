import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import StatusItem from "./components/StatusItem";
import { Timeline } from "@material-ui/lab";

function Status(props) {
  const { status } = props;

  const numberOfFailed =
    status?.length > 0
      ? status.filter((item) => item.name === "failed").length
      : 0;

  return (
    <Card>
      <CardHeader title="Trạng thái" />
      <CardContent>
        <Timeline>
          {status?.length > 0
            ? status.map((item, index) => (
                <StatusItem
                  key={index}
                  index={index}
                  item={item}
                  isLast={index === status.length - 1}
                  numberOfFailed={numberOfFailed}
                />
              ))
            : ""}
        </Timeline>
      </CardContent>
    </Card>
  );
}

export default Status;
