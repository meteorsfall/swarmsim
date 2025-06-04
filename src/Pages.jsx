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

	const hive_neuron = ["You own 46.0680 quintillion hive neurons.", "Each produces 2,357 neuroprophets per second. (x261 bonus)", "In total, they produce 108.601 sextillion neuroprophets per second.", "You earn 177.766 million hive neurons per second."]

	function Description(){
		const production = bugCards['Hive Neuron'].production * (2 ** faster);

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1em',
					marginTop: '.9em',
					fontSize: '14px',
					color: '#333',
				}}>
				<div> {bugCards['Hive Neuron'].description } </div>
				<div> You own {formatSwarmNumber(bugAmount, true)} {bug.toLowerCase()}s. </div>
				<div> Each produces {formatSwarmNumber(production, true)} {child.toLowerCase()}s per second (x{2 ** faster} bonus) </div>
				<div> In total, they produce {formatSwarmNumber(bugAmount * production, true)} {child.toLowerCase()}s per second. </div>
				<div> You earn </div>
			</div>
		)
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


	return (
		<div
			style={{
				display:'flex',
				flexDirection:'column',
				marginLeft: '1em',
				marginTop: '.2em',
				width: '100%',
			}}>
			<div>
				<div className="blue"
					style={{
						marginTop: '.65em',
						marginLeft: '0em',
						fontSize: '24px'
					}}>
					{bug}
				</div>
				<Description />
			</div>
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
					hive neuron (x256 twins) will cost 38.7Qa meat, 1.00B neuroprophets, and 1 larva.
				</div>
				<div
				style={{
					marginTop: '.9em',
					display: 'flex',
					flexDirection: 'row'
				}}>
					<GrowButton text="1,024" />
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
