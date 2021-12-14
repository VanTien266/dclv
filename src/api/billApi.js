import axiosClient from "./axiosClient";

class BillApi {
  getAll = () => {
    const url = "/bill";
    return axiosClient.get(url);
  };
  getOne = (id) => {
    const url = `/bill/detail/${id}`;
    return axiosClient.get(url);
  };
  getFabricRollBillCompleted = (params) => {
    const url = "/bill/fabricrollcompleted";
    return axiosClient.get(url, { params });
  };
  getListByIds = (data) => {
    const url = "/bill/list";
    return axiosClient.post(url, data);
  };
}
const billApi = new BillApi();
export default billApi;
