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
  getOne: (orderId) => {
    const url = `/order/${orderId}`;
    return axiosClient.get(url);
  },
  getOrderStatus: () => {
    const url="/getorderstatus";
    return axiosClient.get(url);
  },
  getProducts: (orderId) => {
    const url = `/order/${orderId}/products`;
    return axiosClient.get(url);
  },
  updateStatus: (orderId, data) => {
    const url = `/order/${orderId}/update_status`;
    return axiosClient.post(url, data);
  }
};
export default orderApi;
