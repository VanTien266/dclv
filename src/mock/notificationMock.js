import moment from "moment";

import mock from "../utils/mock";

mock.onGet("notificationsstaff").reply(200, {
  notificationStaff: [
    {
        dateAdded: moment()
        .subtract(1, "days")
        .subtract(2, "months")
        .subtract(0, "years"),
        content: 'Nhân viên Nguyen Van A liên hệ quản lý'

    },
    {
        dateAdded: moment()
        .subtract(5, "days")
        .subtract(1, "months")
        .subtract(0, "years"),
        content: 'Nhân viên Nguyen Van B liên hệ quản lý'

    },
    {
        dateAdded: moment()
        .subtract(10, "days")
        .subtract(2, "months")
        .subtract(0, "years"),
        content: 'Nhân viên Nguyen Van C liên hệ quản lý'

    },
    {
      dateAdded: moment()
      .subtract(10, "days")
      .subtract(2, "months")
      .subtract(0, "years"),
      content: 'Nhân viên Nguyen Van C liên hệ quản lý'

  },
  
  ],
});

