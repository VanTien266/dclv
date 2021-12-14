import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Order from "./components/Order";
import FilterBar from "./components/FilterBar";
import ListHeader from "./components/ListHeader";
import orderApi from "../../api/orderApi";

export default function OrderListPage() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchOrder = async () => {
      const response = await orderApi.getAll();
      if (mounted) {
        setOrderList(response);
      }
    };
    fetchOrder();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(orderList);

  return (
    <>
      <Container maxWidth="xl">
        <FilterBar />
        <ListHeader />
        {orderList.map((item, idx) => {
          return <Order key={idx} order={item} />;
        })}
      </Container>
    </>
  );
}

// const data = [
//   {
//     orderID: "MDH12345",
//     userName: "Nguyễn Văn Tĩnh",
//     dayOrder: "12/01/2020",
//     numberOfBill: "2",
//     deposit: "10.000.000 đ",
//     products: [
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "9000m",
//       },
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "100m",
//       },
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "9000m",
//       },
//     ],
//     status: "Đang giao hàng",
//   },
//   {
//     orderID: "MDH12345",
//     userName: "Nguyễn Văn Tĩnh",
//     dayOrder: "12/01/2020",
//     numberOfBill: "2",
//     deposit: "10.000.000 đ",
//     products: [
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "0m",
//       },
//     ],
//     status: "Đã xử lý xong",
//   },
//   {
//     orderID: "MDH12345",
//     userName: "Nguyễn Văn Tĩnh",
//     dayOrder: "12/01/2020",
//     numberOfBill: "2",
//     deposit: "10.000.000 đ",
//     products: [
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "0m",
//       },
//     ],
//     status: "Đang giao hàng",
//   },
//   {
//     orderID: "MDH12345",
//     userName: "Nguyễn Văn Tĩnh",
//     dayOrder: "12/01/2020",
//     numberOfBill: "2",
//     deposit: "10.000.000 đ",
//     products: [
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "0m",
//       },
//     ],
//     status: "Đang giao hàng",
//   },
//   {
//     orderID: "MDH12345",
//     userName: "Nguyễn Văn Tĩnh",
//     dayOrder: "12/01/2020",
//     numberOfBill: "2",
//     deposit: "10.000.000 đ",
//     products: [
//       {
//         typeID: "KT1234",
//         colorCode: "2365",
//         total: "100m",
//         shipped: "100m",
//         remain: "0m",
//       },
//     ],
//     status: "Đang giao hàng",
//   },
// ];
