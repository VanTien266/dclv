import axiosClient from "./axiosClient";
class OrderApi {
  getAll = () => {
    const url = "/order";
    return axiosClient.get(url);
  };
  getOne = () => {};
}
const orderApi = new OrderApi();
export default orderApi;
