import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResources,
  updateResource,
  changeResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import ProgressBar from "./ProgressBar";
import computedStats from "./helpers/computedStats";
import Description from "./Description";
import GrowButtonArray from "./GrowButtonArray";

export default function TerritoryPages() {

  function PageBeginning() {
    return (
      <div>
        <div className="blue page-name"> Swarmling </div>
        <div className="bug-description">
          dfsj
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
          larva.
        </div>
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
