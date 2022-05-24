import axiosClient from "./axiosClient";

// const staffApi = {
//   getAll: (params) => {
//     const url = "/admin/liststaff";
//     return axiosClient.get(url, { params });
//   },
//   getInfoById: (params) => {
//     const url = "/admin/liststaff/info/:id";
//     return axiosClient.get(url, { params });
//   }

// }
// // const staffApi = new StaffApi();
// export default staffApi;

class StaffApi {
  login = (data) => {
    const url = "/user/staff/login";
    return axiosClient.post(url, data);
  };
  getAll = (params) => {
    const url = "/user/admin/liststaff";
    return axiosClient.get(url);
  };
  getInfoById = (id) => {
    const url = `/user/admin/staffInfo/${id}`;
    return axiosClient.get(url);
  };
  getSalesman = () => {
    const url = "/user/staff/salesman";
    return axiosClient.get(url);
  };
  getStaffInfo = () => {
    const url = "/user/staff/detail";
    return axiosClient.get(url);
  };
  createStaff = (data) => {
    const url = "/user/admin/createStaff";
    return axiosClient.post(url, data);
  };
}
const staffApi = new StaffApi();
export default staffApi;
