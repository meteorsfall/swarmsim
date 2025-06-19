import "./index.css";
import React, { useState } from "react";
import BugPages from "./BugPages";
import LarvaePages from "./LarvaePages";
import TerritoryPages from "./TerritoryPages";

export function PageBeginning({title, description}) {
  return (
    <div style={{marginTop:0,}}>
      <div className="blue page-name"> {title} </div>
      <div className="bug-description" style={{marginTop:0}}>
        {description}
      </div>
    </div>
  )
}
export default function Pages({ bugIndex, tabIndex }) {

  if (tabIndex == "Meat"){
    return (
      <BugPages bugIndex={bugIndex} />
    )
  } else if (tabIndex == "Larvae"){
    return (
      <LarvaePages />
    )
  } else if (tabIndex == "Territory"){
    return <TerritoryPages />
  }
}
