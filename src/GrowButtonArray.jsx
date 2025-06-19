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
import { ProgressBarFaster, ProgressBarTwin } from "./ProgressBar";
import computedStats from "./helpers/computedStats";
import ButtonsArray, { ButtonTemplate } from "./ButtonsArray";
import { changeLarvae } from "../store/larvaeSlice";

function GrowButton({ amount, widthMultiple, bugIndex }) {
  const dispatch = useDispatch();
  const {
    bug,
    child,
    childAmount,
    larvae,
    meat,
    cost,
    costMeat,
    twin,
  } = computedStats({ bugIndex });


  const units = amount / 2 ** twin;

  function handleClick() {
    console.log("GROW CLICKED", { amount, bug });
    dispatch(changeBugQuantity({ bugName: bug, diff: amount }));
    if (bug != "Drone") {
      dispatch(changeBugQuantity({ bugName: child, diff: -units * cost }));
    }
    dispatch(changeBugQuantity({ bugName: "Meat", diff: -units * costMeat }));
    dispatch(changeLarvae({ diff: -units }));
  }

  return (
    <ButtonTemplate
      amount={amount}
      widthMultiple={widthMultiple}
      handleClick={handleClick}
      verb="Grow"
    />
  );
}


export default function GrowButtonArray({ bugIndex }) {
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

  let maxBuy;
  if (bug === "Drone") {
    maxBuy = Math.floor(Math.min(meat / costMeat, larvae));
  } else {
    maxBuy = Math.floor(Math.min(meat / costMeat, childAmount / cost, larvae));
  }
  const twinMultiple = 2 ** twin;
  const leftAmount = twinMultiple;
  const middleAmount = Math.floor((twinMultiple * maxBuy) / 4);
  const rightAmount = twinMultiple * maxBuy;
  let options;
  if (maxBuy <= 1) {
    options = [maxBuy];
  } else if (maxBuy < 8) {
    options = [leftAmount, rightAmount];
  } else {
    options = [leftAmount, middleAmount, rightAmount];
  }

  return (
    <ButtonsArray bugIndex={bugIndex} button={(props) => <GrowButton {...props} bugIndex={bugIndex}  />} options={options} />
  );
}
