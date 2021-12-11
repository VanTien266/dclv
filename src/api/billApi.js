import axiosClient from "./axiosClient";
import qs from "qs";

class BillApi {
  getAll = () => {
    const url = "/bill";
    return axiosClient.get(url);
  };
  getOne = (params) => {
    const url = "/bill/detail";
    return axiosClient.get(url, { params });
  };
}
const billApi = new BillApi();
export default billApi;
