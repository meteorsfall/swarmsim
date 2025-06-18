import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Tabs from "./Tabs";
import "./index.css";
import { bugNames, bugCards } from "./constants";
import {
  selectResources,
  updateResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import { selectBugAttr, incrementBugQuantities } from "../store/bugsSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementBugQuantities());
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginLeft: "11.3em",
        marginRight: "10em",
      }}
    >
      <Header />
      <Tabs />
    </div>
  );
}
