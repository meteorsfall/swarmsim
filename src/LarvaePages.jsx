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

export default function LarvaePages() {
  const resources = useSelector(selectResources);
  const larvae = resources["Larvae"];

  function PageBeginning() {
    return (
      <div>
        <div className="blue page-name"> Larvae </div>
        <div className="bug-description">
          <div> The children of your swarm. These young creatures morph into other adult ones. </div>
          <div> You own {formatSwarmNumber(larvae)} larvae. </div>
          <div> You earn larvae per second. </div>
        </div>
      </div>
    );
  }

    function Progress(){
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
            </div>
        </div>
    )
  }


  return (
    <div className="page-layout">
      <PageBeginning />
      <hr className="horizontal-rule" style={{ marginTop: "1.5em" }} />
      <div style={{ marginTop: ".7em" }}>
        <div
          style={{
            marginTop: ".9em",
            display: "flex",
            flexDirection: "row",
          }}
        >
        </div>
      </div>
      <Progress />
    </div>
  );
}
