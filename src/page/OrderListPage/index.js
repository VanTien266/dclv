import React from "react";
import { Container, Typography, CssBaseline } from "@material-ui/core";
import Order from "./components/Order";
import FilterBar from "./components/FilterBar";
import ListHeader from "./components/ListHeader";

const data = [
    {
        orderID: "MDH12345",
        userName: "Nguyễn Văn Tĩnh",
        dayOrder:"12/01/2020",
        numberOfBill: "2",
        deposit: "10.000.000 đ",
        products: [
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "9000m"
            },
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "100m"
            },
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "9000m"
            }
        ],
        status:"Đang giao hàng"
    },
    {
        orderID: "MDH12345",
        userName: "Nguyễn Văn Tĩnh",
        dayOrder:"12/01/2020",
        numberOfBill: "2",
        deposit: "10.000.000 đ",
        products: [
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "0m"
            }
        ],
        status: "Đã xử lý xong"
    },
    {
        orderID: "MDH12345",
        userName: "Nguyễn Văn Tĩnh",
        dayOrder:"12/01/2020",
        numberOfBill: "2",
        deposit: "10.000.000 đ",
        products: [
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "0m"
            }
        ],
        status:"Đang giao hàng"
    },
    {
        orderID: "MDH12345",
        userName: "Nguyễn Văn Tĩnh",
        dayOrder:"12/01/2020",
        numberOfBill: "2",
        deposit: "10.000.000 đ",
        products: [
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "0m"
            }
        ],
        status:"Đang giao hàng"
    },
    {
        orderID: "MDH12345",
        userName: "Nguyễn Văn Tĩnh",
        dayOrder:"12/01/2020",
        numberOfBill: "2",
        deposit: "10.000.000 đ",
        products: [
            {
                productID: "KT1234",
                total: "100m",
                shipped: "100m",
                remain: "0m"
            }
        ],
        status:"Đang giao hàng"
    },
    
];

export default function OrderListPage() {
  return (
    <>
      <Container maxWidth="xl">
        <FilterBar/>
        <ListHeader/>
        {data.map((item) => {
            return <Order order={item}/>
        })}
      </Container>
    </>
  );
}
