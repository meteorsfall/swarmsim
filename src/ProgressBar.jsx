import React, { useState } from 'react';
import './index.css';
import { bugNames, bugCards } from './constants';
import {useSelector} from 'react-redux';
import { selectResources, updateResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr } from '../store/bugsSlice';
import computedStats from './computedStats';


export function ProgressBarFaster({text, bugIndex}){
	const {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount
	} = computedStats({bugIndex});

		const percentFaster = (100*Math.min(1, bugAmount/fasterAmount)).toFixed(0);

		function capitalizeFirst(str) {
			str = str.toLowerCase();
			return str.charAt(0).toUpperCase() + str.slice(1);
		}

		if (bugIndex == 0){
			return (<></>)
		}
		return (
			<div style={{marginTop: '.6em'}}>
				<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
					<div> Faster {bug}s ({faster}) </div>
					<div> {capitalizeFirst(bug)}s produce more {child.toLowerCase()}s. </div>
					<div> Next upgrade costs <span className='blue'> {formattedFasterAmount} {bug.toLowerCase()}s. </span> </div>
				</div>
				<div>
					<div className="progress-bar-entire" >
						<div className="progress-bar-color"
							style={{width: `${percentFaster}%` }}>
							{percentFaster}% {text}
						</div>
					</div>
					<div className="progress-bar-bottom" >
						Can't buy
					</div>
				</div>
			</div>
		)

	}

export function ProgressBarTwin({text, bugIndex}){
	const {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount
	} = computedStats({bugIndex});


	const percentTwin = (100*Math.min(1, parentAmount/twinAmount)*100).toFixed(0);

	if (bugIndex === 0){
		return (<></>)
	}

	return (
		<div style={{marginTop: '.6em'}}>
			<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
				<div> Twin {bug}s ({twin}) </div>
				<div> Multiple {bug.toLowerCase()}s are created from each larva. (This does not affect {parent.toLowerCase()} production.) </div>
				<div> Next upgrade costs <span className='blue'> {formattedTwinAmount} neural clusters </span> </div>
			</div>

			<div>
				<div className="progress-bar-entire" >
					<div className="progress-bar-color" style={{width: '${percentTwin}%'}}>
						{percentTwin}% {text}
					</div>
				</div>
				<div className="progress-bar-bottom" >
					Can't buy
				</div>
			</div>
		</div>
	)

}


export default function ProgressBar({bugIndex, progressDescription}){
	const {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount
	} = computedStats({bugIndex});

	const percentFaster = (100*Math.min(1, bugAmount/fasterAmount)).toFixed(0);

	function capitalizeFirst(str) {
		str = str.toLowerCase();
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	if (bugIndex == 0){
		return (<></>)
	}
	return (
		<div style={{marginTop: '.6em'}}>
			<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
				<div> Faster {bug}s ({faster}) </div>
				<div> {capitalizeFirst(bug)}s produce more {child.toLowerCase()}s. </div>
				<div> Next upgrade costs <span className='blue'> {formattedFasterAmount} {bug.toLowerCase()}s. </span> </div>
			</div>
			<div>
				<div className="progress-bar-entire" >
					<div className="progress-bar-color"
						style={{width: `${percentFaster}%` }}>
						{percentFaster}% {text}
					</div>
				</div>
				<div className="progress-bar-bottom" >
					Can't buy
				</div>
			</div>
		</div>
	)

}
