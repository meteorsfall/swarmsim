import React, { useState } from 'react';
import './index.css';
import { bugNames, bugCards } from './constants';
import { useDispatch, useSelector} from 'react-redux';
import { selectResources, updateResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr } from '../store/bugsSlice';
import { ProgressBarFaster, ProgressBarTwin } from './ProgressBar';
import computedStats from './computedStats';


export default function Description({bugIndex}){
	const {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount
	} = computedStats({bugIndex});

	const production = bugCards[bug].production;
	const modifiedProduction = bugCards[bug].production * (2 ** faster);
	const parentFaster = useSelector(selectBugAttr(parent, "faster"));

	if (bug === "Meat"){
		return (
			<div className="bug-description">
				<div> {bugCards[bug].description} </div>
				<div> You own {formatSwarmNumber(bugAmount, true)} {bug.toLowerCase()}s. </div>
				<div> You earn {formatSwarmNumber(parentAmount*(2 ** parentFaster), true) } {bug.toLowerCase()} per second. </div>
			</div>
		)
	}
	else if (bugIndex === 0){
		return (
			<div className="bug-description">
				<div> {bugCards[bug].description} </div>
				<div> You own no {bug.toLowerCase()}s. </div>
				<div> Each produces {production} {child}s per second. </div>
			</div>
		)
	}
	else {
		return (
			<div className="bug-description">
				<div> {bugCards[bug].description } </div>
				<div> You own {formatSwarmNumber(bugAmount, true)} {bug.toLowerCase()}s. </div>
				<div> Each produces {formatSwarmNumber(production, true)} {child.toLowerCase()}s per second (x{2 ** faster} bonus) </div>
				<div> In total, they produce {formatSwarmNumber(bugAmount * modifiedProduction, true)} {child.toLowerCase()}s per second. </div>
				<div> You earn {formatSwarmNumber(parentAmount*(bugCards[bug].production+1)*(2 ** parentFaster), true) } {bug.toLowerCase()}s per second. </div>
			</div>
		)
	}
}


