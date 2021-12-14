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
}
const productApi = new ProductApi();
export default productApi;
