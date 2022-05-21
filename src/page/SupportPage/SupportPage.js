import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import ListHeader from "./components/ListHeader";
import SupportItem from "./components/SupportItem";
import FilterBar from "./components/FilterBar";
import supportApi from "../../api/supportApi";
import { async } from "validate.js";

export default function SupportPage() {
  const [supportList, setSupportList] = useState([]);
  const getSupportList = async () => {
    try {
      const response = await supportApi.getAll();
      setSupportList(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSupportList();
  }, []);
  return (
    <Container maxWidth="xl">
      <FilterBar />
      <ListHeader />
      {supportList.map((item, idx) => (
        <SupportItem item={item} key={idx} />
      ))}
    </Container>
  );
}
