import React, { useState } from "react";
import "./index.css";
import Pages from "./Pages";
import { bugNames, bugCards } from "./helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResources,
  updateResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import { selectBugAttr } from "../store/bugsSlice";
import {capitalizeFirst, lowercaseFirst} from "./helpers/helperFunctions";

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
  const [tabIndex, setTabIndex] = useState("Meat");

  const useBugQuantities = () =>
    bugNames.map((bug) =>
      useSelector((state) => selectBugAttr(bug, "quantity")(state))
  );
  const bugQuantities = useBugQuantities();
  let biggestBug = bugQuantities.length - 1;
  for (let i = bugQuantities.length - 2; i >= 0; i--){
    if (bugQuantities[i] > 0){
      biggestBug = i;
    }
  }
  if (biggestBug > 0){
    biggestBug--;
  }

  function Bug({ bugIndex, showIcon = false }) {
    const bug = bugNames[bugIndex];
    const quantity = formatSwarmNumber(useSelector(selectBugAttr(bug, "quantity")));
    return (
      <div
        className={`tabBug ${pageIndex === bugIndex ? "active" : ""} bug-style`}
        onMouseDown={() => setPageIndex(bugIndex)}
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

  function Tab({resourceType}){
    let quantity;
    if (resourceType == "Larvae"){
      quantity = namedAmount("Larvae")
    } else if (resourceType == "Meat"){
      quantity = formatSwarmNumber(useSelector(selectBugAttr("Meat", "quantity")))
    }
    return (
      <div
        className={`tab ${tabIndex === resourceType ? "active" : ""} `}
        onMouseDown={() => setTabIndex(resourceType)} >
        {quantity} {lowercaseFirst(resourceType) }
      </div>
    )
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
        {/* <div className="tab" style={{ color: "#555" }}>
          {formatSwarmNumber(useSelector(selectBugAttr("Meat", "quantity")))} meat
          <i class="fa-solid fa-circle-arrow-up icon-space"></i>
        </div> */}
        <Tab resourceType="Meat" />
        <Tab resourceType="Larvae" />
        {/*<div className="tab">
          {" "}
          {namedAmount("Territory")} territory
          <i class="fa-solid fa-circle-arrow-up icon-space"></i>
        </div> */}
        {/* <div className="tab"> {namedAmount("Energy")} energy (69%) </div> */}
        {/* <div className="tab"> {namedAmount("Mutagen")} mutagen (+10.9B) </div>
        <div className="tab"> More... </div> */}
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
          {bugNames.slice(biggestBug).map((bug, i) => (
            <Bug
              key={i}
              bugIndex={biggestBug + i}
              //showIcon={showIcons[i + biggestBug]}
              showIcon={false}
            />
          ))}
        </div>
        <Pages bugIndex={pageIndex} tabIndex={tabIndex}/>
      </div>
    </div>
  );
}
