import React, { useState } from 'react';
import './index.css';
import { bugNames, bugCards } from './constants';
import {useSelector} from 'react-redux';
import { selectResources, updateResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr } from '../store/bugsSlice';


export default function Pages({bugIndex}) {
	const bug = bugNames[bugIndex];
	const parent=bugNames[bugIndex-1];
	const bugAmount = useSelector(selectBugAttr(bug, "quantity"));
	const parentAmount = useSelector(selectBugAttr(parent, "quantity"));
	const child=bugNames[bugIndex+1];
	const faster = useSelector(selectBugAttr(bug, "faster"));
	const fasterAmount = 66*(666 ** faster);
	const formattedFasterAmount = formatSwarmNumber(fasterAmount);


	function Description(){
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

	function GrowButton({text}){
		return (
			<div
				style={{
					display: 'flex',
					border: '1px solid #ccc',
					alignItems: 'center',
					justifyContent: 'center',
					width: '282px',
					height: '30px',
				}}>
				Grow {text}
			</div>
		)
	}

	function ProgressBarFaster({text}){
		const percent = (100*Math.min(1, bugAmount/fasterAmount)).toFixed(0);

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
							style={{width: `${percent}%` }}>
							{percent}% {text}
						</div>
					</div>
					<div className="progress-bar-bottom" >
						Can't buy
					</div>
				</div>
			</div>
		)

	}

	function ProgressBarTwin({text}){
		const twin = useSelector(selectBugAttr(bug, "twin"));
		const twinAmount = 10**(twin);
		const formattedTwinAmount = formatSwarmNumber(twinAmount);
		const percent = (100*Math.min(1, parentAmount/twinAmount)*100).toFixed(0);

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
						<div className="progress-bar-color" style={{width: '${percent}%'}}>
							{text}
						</div>
					</div>
					<div className="progress-bar-bottom" >
						Can't buy
					</div>
				</div>
			</div>
		)

	}

	function PageBeginning() {
		return (
			<div>
				<div className="blue page-name" >
					{bug}
				</div>
				<Description />
			</div>
		)
	}

	if (bug === "Meat"){
		return (
			<div className="page-layout">
				<PageBeginning />
			</div>
		)
	}

	return (
		<div className="page-layout">
			<PageBeginning />
			<hr className="horizontal-rule" style={{marginTop: '1.5em'}}/>
		<div style={{marginTop: '.7em'}}>
			<div>
					Growing <span style={{}}>
					<input type="text" defaultValue="1"
						style={{
							height: '2em',
							border: '1px solid #ccc',
							borderRadius: '4px',
							color: '#999999',
							paddingLeft: '1em',
							width: '190px',
					}}>
					</input> </span>
					{bug.toLowerCase()} (x{formatSwarmNumber(2 ** faster)} twins) will cost {formatSwarmNumber(bugCards[bug].costMeat)} meat, {formatSwarmNumber(bugCards[bug].cost)} {child.toLowerCase()}, and 1 larva.
				</div>
				<div
				style={{
					marginTop: '.9em',
					display: 'flex',
					flexDirection: 'row'
				}}>
					<GrowButton text= {formatSwarmNumber(2 ** faster)} />
					<GrowButton text="55.7Qi" />
					<GrowButton text="226Qi" />
				</div>
			</div>
			<hr className="horizontal-rule"
				style={{
					marginTop: '1.5em',
				}} />
			<div
			style={{
				marginBottom: '4em',
				marginTop: '.3em',
			}}>
				<div style={{fontSize: '18px', marginBottom: '0em'}}>Upgrades</div>
				<ProgressBarFaster text="4,910 years"/>
				<ProgressBarTwin text="2,213 years"/>
			</div>
		</div>

	)
}
