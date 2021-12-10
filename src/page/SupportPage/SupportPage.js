import React from "react";
import {Container} from "@material-ui/core";
import ListHeader from "./components/ListHeader";
import SupportItem from "./components/SupportItem";
import FilterBar from "./components/FilterBar";

const data = [
    {
        orderID: "MDH1234",
        customerName: "Lưu Văn Tiến",
        customerPhoneNum: "0987654321",
        feedback: "Đơn hàng có một số cây vải bị lỗi màu",
        status: "processing"
    },
    {
        orderID: "MDH1235",
        customerName: "Lưu Văn Tiến",
        customerPhoneNum: "0987654321",
        feedback: "Đơn hàng có một số cây vải giao sai số lượng đặt mua",
        status: "complete"
    },
];

export default function SupportPage() {
    return (
        <Container maxWidth="xl">
            <FilterBar/>
            <ListHeader/>
            {data.map((item, idx) => {
                return (
                    <SupportItem item={item} key={idx}/>
                );
            })}
        </Container>
    );
}