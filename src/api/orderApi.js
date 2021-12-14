import axiosClient from "./axiosClient";

const orderApi = {
  getAll: () => {
    const url = "/order";
    return axiosClient.get(url);
  },

  countAllOrder: () => {
    const url = "/countallorder";
    return axiosClient.get(url);
  },

  countOrderComplete: () => {
    const url = "/countallordercomplete";
    return axiosClient.get(url);
  },

  totalDeposit: () => {
    const url = "/deposit";
    return axiosClient.get(url);
  },
  getOne: (params) => {
    const url = "/order/detail";
    return axiosClient.get(url, { params });
  },
};
export default orderApi;
