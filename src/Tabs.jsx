import React, { useState } from "react";
import "./index.css";
import Pages from "./Pages";
import { bugNames, bugCards } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResources,
  updateResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import { selectBugAttr } from "../store/bugsSlice";

export default function Tabs() {
  const resources = useSelector(selectResources);
  const dispatch = useDispatch();
  const showIcons = [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
  ];
  const namedAmount = (key) => formatSwarmNumber(resources[key]);
  const [pageIndex, setPageIndex] = useState(3);

  function Bug({ bugIndex, showIcon = false }) {
    const bug = bugNames[bugIndex];
    const quantity = formatSwarmNumber(useSelector(selectBugAttr(bug, "quantity")));
    return (
      <div
        className={`tabBug ${pageIndex === bugIndex ? "active" : ""} bug-style`}
        onClick={() => setPageIndex(bugIndex)}
        style={{
        }}
      >
        {bug}
        <span className="floatRight"> {quantity} </span>
        <div>
          <i
            class="fa-solid fa-circle-arrow-up"
            style={{
              display: showIcon ? "block" : "none",
              position: "absolute",
              left: ".4em",
              top: ".8em",
              color: "black",
            }}
          ></i>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: ".5em" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid #dddddd",
        }}
      >
        <div className="tab" style={{ color: "#555" }}>
          {" "}
          {namedAmount("Meat")} meat
          <i class="fa-solid fa-circle-arrow-up icon-space"></i>
        </div>
        <div className="tab"> {namedAmount("Larvae")} larvae </div>
        <div className="tab">
          {" "}
          {namedAmount("Territory")} territory
          <i class="fa-solid fa-circle-arrow-up icon-space"></i>
        </div>
        <div className="tab"> {namedAmount("Energy")} energy (69%) </div>
        <div className="tab"> {namedAmount("Mutagen")} mutagen (+10.9B) </div>
        <div className="tab"> More... </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "330px",
            paddingRight: "1em",
            border: "none",
          }}
        >
          {bugNames.map((bug, i) => (
            <Bug
              key={i}
              bugIndex={i}
              showIcon={showIcons[i]}
            />
          ))}
        </div>
        <Pages bugIndex={pageIndex} />
      </div>
    </div>
  );
}
