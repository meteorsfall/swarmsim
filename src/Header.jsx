import React, { useState } from "react";
import { bugNames } from "./helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectQuantities,
  updateQuantity,
  store,
  formatSwarmNumber,
} from "../store/store";

export default function Header() {
  return (
    <div
      className="left-margin"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <div
        className=""
        style={{
          marginTop: "0em",
          border: "1px solid #e7e7e7",
          padding: ".8em",
          color: "#777",
          backgroundColor: "#f8f8f8",
          fontSize: "18px",
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        Swarm Simulator{" "}
        <span
          style={{
            display: "inline-block",
            marginLeft: ".8em",
            fontSize: "15px",
          }}
        >
          {" "}
          v1.1.17{" "}
        </span>
      </div>
      <div
        className="blue"
        style={{
          display: "none",
          padding: "1em",
          fontSize: "14px",
          backgroundColor: "#d9edf7",
          marginTop: "0.3em",
          paddingTop: "1.2em",
        }}
      >
        Welcome back! While you were away for 7 minutes, your swarm produced:
        <ul
          style={{
            margin: "0em",
            marginTop: "0.3em",
            display: "flex",
            flexDirection: "column",
            gap: "0.3em",
          }}
        >
          <li> 11.2722 quintillion neuroprophets </li>
          <li> 303.344 septillion hive empresses </li>
          <li> 120.741 decillion hive queens </li>
          <li> 4.99633 trestrigintillion meat </li>
          <li> 1.67750 quadrillion larvae </li>
          <li> 5.40352 tresvigintillion territory </li>
          <li> 684 energy </li>
        </ul>
      </div>
    </div>
  );
}
