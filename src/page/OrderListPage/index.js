import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Order from "./components/Order";
import FilterBar from "./components/FilterBar";
import ListHeader from "./components/ListHeader";
import orderApi from "../../api/orderApi";

export default function OrderListPage() {
  const [orderList, setOrderList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchOrder = async () => {
      const response = await orderApi.getAll(1, 100);
      if (mounted && response.length > 0) {
        if (filter !== "")
          setOrderList(
            response.filter(
              (item) =>
                item.orderStatus[item.orderStatus.length - 1].name === filter
            )
          );
        else setOrderList(response);
      }
    };
    fetchOrder();

    return () => {
      mounted = false;
    };
  }, [filter]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Container maxWidth="xl">
        <FilterBar filter={filter} handleFilterChange={handleFilterChange} />
        <ListHeader />
        {orderList.map((item, idx) => {
          return <Order key={idx} order={item} />;
        })}
      </Container>
    </>
  );
}
