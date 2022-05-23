import axiosClient from "./axiosClient";

// class ProductApi {
//   getAll = (params) => {
//     const url = "/product1";
//     return axiosClient.get(url, { params });
//   };
//   getOne = (params) => {
//     const url = "/product/detail";
//     return axiosClient.get(url, { params });
//   };
//   getListById = (data) => {
//     const url = "/product/list";
//     return axiosClient.post(url, data);
//   };
//   getChartWarehouseTrue = (params) => {
//     const url = "/chartwarehouse";
//     return axiosClient.get(url, { params });
//   };
//   getFabricTypeSell = (params) => {
//     const url = "/getfabrictypesell";
//     return axiosClient.get(url, { params });
//   };
// }
// const productApi = new ProductApi();
// export default productApi;

class ProductApi {
  getAll = (params) => {
    const url = "/fabric/product";
    return axiosClient.get(url, { params });
  };
  getOne = (id) => {
    const url = `/fabric/product/${id}`;
    console.log(url);
    return axiosClient.get(url);
  };
  getListById = (data) => {
    const url = "/fabric/roll";
    return axiosClient.post(url, data);
  };
  getListOfBill = (data) => {
    const url = "/fabric/rollOfBill";
    return axiosClient.post(url, data);
  };
  getChartWarehouseTrue = (params) => {
    const url = "/fabric/chartwarehouse";
    return axiosClient.get(url, { params });
  };
  getFullListType = (params) => {
    const url = "/fabric/fullTypeList";
    return axiosClient.get(url, { params });
  };
  getListColorcode = (params) => {
    const url = "/fabric/colorCode";
    return axiosClient.get(url, { params });
  };
}
const productApi = new ProductApi();
export default productApi;
