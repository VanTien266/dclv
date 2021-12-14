import axios from "axios";
import QueryString from "qs";
import axiosClient from "./axiosClient";

class ProductApi {
  getAll = (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  };
  getListById = (data) => {
    const url = "/product/list";
    // const body = QueryString.stringify(data);
    return axiosClient.post(url, data);
  };
  getChartWarehouseTrue = (params) => {
    const url = "/chartwarehouse";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;
