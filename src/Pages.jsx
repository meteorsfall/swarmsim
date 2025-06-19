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
import BugPages from "./BugPages";
import LarvaePages from "./LarvaePages";

export default function Pages({ bugIndex, tabIndex }) {
  if (tabIndex == "Meat"){
    return (
      <BugPages bugIndex={bugIndex} />
    )
  } else if (tabIndex == "Larvae"){
    return (
      <LarvaePages />
    )
  }
}
