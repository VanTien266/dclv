import axiosClient from "./axiosClient";

class BillApi {
  getAll = () => {
    const url = "/bill";
    return axiosClient.get(url);
  };
  getOne = (params) => {
    const url = `/bill/detail/${params}`;
    return axiosClient.get(url);
  };
  getFabricRollByBillId = (params) => {
    const url = "/bill/fabricrollcompleted";
    return axiosClient.get(url, { params });
  };
  getListByIds = (data) => {
    const url = "/bill/list";
    return axiosClient.post(url, data);
  };
  getBillCompleted = () => {
    const url = "/bill/completed";
    return axiosClient.get(url);
  };
}
const billApi = new BillApi();
export default billApi;
