import React, { useState } from 'react';
import './index.css';
import { bugNames, bugCards } from './constants';
import { useDispatch, useSelector} from 'react-redux';
import { selectResources, updateResource, changeResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr, changeBugQuantity } from '../store/bugsSlice';
import { ProgressBarFaster, ProgressBarTwin } from './ProgressBar';
import computedStats from './computedStats';


export function ButtonTemplate({amount, widthMultiple, handleClick, verb}){
	const width = 282;

	if (amount == 0){
		return (
			<div className="button-zero"
				style={{width:`${width*widthMultiple}px`}}>
				Can't {verb.toLowerCase()}
			</div>
		)
	} else {
		return (
			<div className="button" onClick={handleClick}
				style={{width:`${width*widthMultiple}px` }}>
				{verb} {formatSwarmNumber(amount)}
			</div>
		)
	}
}

export default function ButtonsArray({bugIndex, button: Button, options}) {
	const {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount
	} = computedStats({bugIndex});


	if (options.length === 1){
		return (
			<Button amount={options[0]} widthMultiple={3}/>
		)
	} else if (options.length === 2){
		return (
			<>
			<Button amount={options[0]} widthMultiple={1.5} />
			<Button amount={options[1]} widthMultiple={1.5} />
			</>
		)
	} else {
		return (
			<>
			<Button amount={options[0]} widthMultiple={1} />
			<Button amount={options[1]} widthMultiple={1} />
			<Button amount={options[2]} widthMultiple={1} />
			</>
		)
	}
}
