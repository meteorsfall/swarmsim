import React, { useState } from "react";
import "./index.css";
import { bugNames, bugCards } from "./helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResources,
  updateResource,
  changeResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import { selectBugAttr, changeBugQuantity } from "../store/bugsSlice";
import ProgressBar from "./ProgressBar";
import computedStats from "./helpers/computedStats";
import Description from "./Description";
import GrowButtonArray from "./GrowButtonArray";

export default function Pages({ bugIndex }) {
  const {
    bug,
    parent,
    bugAmount,
    parentAmount,
    child,
    childAmount,
    faster,
    fasterAmount,
    formattedFasterAmount,
    resources,
    larvae,
    meat,
    cost,
    costMeat,
    twin,
    twinAmount,
    formattedTwinAmount,
  } = computedStats({ bugIndex });

  function PageBeginning() {
    return (
      <div>
        <div className="blue page-name">{bug}</div>
        <Description bugIndex={bugIndex} />
      </div>
    );
  }

    function Progress(){
        if (bugIndex == 0){
            return (<></>);
        }
      return (
          <div>
            <hr
              className="horizontal-rule"
              style={{
                marginTop: "1.5em",
              }}
            />
            <div
              style={{
                marginBottom: "4em",
                marginTop: ".3em",
              }}
            >
              <div style={{ fontSize: "18px", marginBottom: "0em" }}>Upgrades</div>
              <ProgressBar bugIndex={bugIndex} isFaster={true} />
              <ProgressBar bugIndex={bugIndex} isFaster={false} />
            </div>
        </div>
    )
  }

  if (bug === "Meat") {
    return (
      <div className="page-layout">
        <PageBeginning />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <PageBeginning />
      <hr className="horizontal-rule" style={{ marginTop: "1.5em" }} />
      <div style={{ marginTop: ".7em" }}>
        <div>
          Growing{" "}
          <span style={{}}>
            <input
              type="text"
              defaultValue="1"
              style={{
                height: "2em",
                border: "1px solid #ccc",
                borderRadius: "4px",
                color: "#999999",
                paddingLeft: "1em",
                width: "190px",
              }}
            ></input>{" "}
          </span>
          {bug.toLowerCase()} (x{formatSwarmNumber(2 ** twin)} twins) will cost{" "}
          {formatSwarmNumber(bugCards[bug].costMeat)} meat,{" "}
          {formatSwarmNumber(bugCards[bug].cost)} {child.toLowerCase()}, and 1
          larva.
        </div>
        <div
          style={{
            marginTop: ".9em",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <GrowButtonArray bugIndex={bugIndex} />
        </div>
      </div>
      <Progress />
    </div>
  );
}
