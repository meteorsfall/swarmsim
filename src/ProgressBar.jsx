import React, { useState } from "react";
import "./index.css";
import { bugNames, bugCards } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResources,
  updateResource,
  store,
  formatSwarmNumber,
} from "../store/store";
import { selectBugAttr, changeBugQuantity, changeBugAttr } from "../store/bugsSlice";
import computedStats from "./computedStats";
import ButtonsArray, {ButtonTemplate} from "./ButtonsArray";
import {formatDuration} from "./helperFunctions";

export default function ProgressBar({ bugIndex, isFaster }) {

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


    function capitalizeFirst(str) {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function FasterDescription(){
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <div>
                    Faster {bug}s ({faster})
                </div>
                <div>
                    {capitalizeFirst(bug)}s produce more {child.toLowerCase()}s.
                </div>
                <div>
                    Next upgrade costs <span className="blue">
                        {formattedFasterAmount} {bug.toLowerCase()}s.
                    </span>
                </div>
            </div>
        )
    }

    function TwinDescription(){
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <div>
                    Twin {bug}s ({twin})
                </div>
                <div>
                    Multiple {bug.toLowerCase()}s are created from each larva. (This does
                    not affect {parent.toLowerCase()} production.)
                </div>
                <div>
                    Next upgrade costs <span className="blue">
                        {formattedTwinAmount} neural clusters
                    </span>
                </div>
            </div>
        )
    }

    function ProgressDescription({isFaster}){
        if (isFaster){
            return (
                <FasterDescription />
            )
        } else {
            return (
                <TwinDescription />
            )
        }
    }

    function BuyButton({amount, widthMultiple, isFaster}){
        const dispatch = useDispatch();

        function handleClick() {
            if (isFaster){
                let cost = fasterAmount;
                for (let i = 2; i <= amount; i++){
                    cost += fasterAmount * (666 ** (i-1) );
                }
                dispatch(changeBugQuantity({bugName: bug, diff: -cost }));
                dispatch(changeBugAttr({bugName: bug, attr: "faster", diff: amount}));
                console.log("changed faster", amount);
            } else {
                let cost = twinAmount;
                for (let i = 2; i <= amount; i++){
                    cost += twinAmount * (10 ** (i-1) );
                }
                dispatch(changeBugQuantity({bugName: parent, diff: -cost }));
                dispatch(changeBugAttr({bugName: bug, attr: "twin", diff:amount}));
            }
        }

        return (
          <ButtonTemplate
            amount={amount}
            widthMultiple={widthMultiple}
            handleClick={handleClick}
            verb="Buy"
          />
        );

    }

    let options = [];
    let maxBuy = 0;
    let progressCost;
    let multiple;
    let totalUnits;
    let spentSoFar = 0;
    let activeProduction = 0;

    if (isFaster){
        progressCost = fasterAmount;
        multiple = 666;
        totalUnits = bugAmount;
        if (bugIndex >= 1 ){
            const parentFaster = useSelector(selectBugAttr(parent, "faster"));
            activeProduction = bugCards[parent].production * (2 ** parentFaster) * parentAmount;
        }
    } else {
        progressCost = twinAmount;
        multiple = 10;
        totalUnits = parentAmount;
        if (bugIndex >= 2){
            const grandpaBug = bugNames[bugIndex - 2];
            const grandpaBugFaster = useSelector(selectBugAttr(grandpaBug, "faster"));
            const grandpaBugAmount = useSelector(selectBugAttr(grandpaBug, "quantity"));
            activeProduction = bugCards[grandpaBug].production * (2 ** grandpaBugFaster) * grandpaBugAmount;
        }
    }
    let spendCounter = progressCost;
    while (spendCounter <= totalUnits){
        maxBuy++;
        totalUnits -= spendCounter;
        spendCounter *= multiple;
    }

    const middleAmount = Math.floor(maxBuy/4);
    if (maxBuy <= 1){
        options = [maxBuy];
    } else if (maxBuy < 8){
        options = [1, maxBuy];
    } else {
        options = [1, middleAmount, maxBuy]
    }

    const percent = (100*totalUnits/spendCounter).toFixed(0);

    let secondsLeft = -1;
    if (activeProduction != 0){
        secondsLeft = (spendCounter - totalUnits)/activeProduction;
    }


    return (
        <div style={{ marginTop: ".6em" }}>
            <ProgressDescription isFaster={isFaster} />
            <div>
                <div className="progress-bar-entire">
                    <div
                        className="progress-bar-color"
                        style={{ width: `${percent}%` }}>
                        {percent}% {formatDuration(secondsLeft)}
                    </div>
                </div>
                <ButtonsArray bugIndex={bugIndex} button={BuyButton} options={options}/>
            </div>
        </div>
    );
}
