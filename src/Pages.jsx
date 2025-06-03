import React, { useState } from 'react';
import './index.css';
import { bugNames } from './constants';

export default function Pages() {
	const hive_neuron = ["Neurons are the building blocks of a greater hive intelligence.", "You own 46.0680 quintillion hive neurons.", "Each produces 2,357 neuroprophets per second. (x261 bonus)", "In total, they produce 108.601 sextillion neuroprophets per second.", "You earn 177.766 million hive neurons per second."]
	const faster_neurons = ["Faster Hive Neurons (7)", "Hive neurons produce more neuroprophets.", <> Next upgrade costs <span className='blue'> 3.83Sx hive neurons</span> . </>]
	const twin_neurons = ["Twin Hive Neurons (12)", "Multiple hive neurons are created from each larva. (This does not affect neural cluster production.)", <> Next upgrade costs <span className='blue'>1.00T neural clusters</span>. </>]

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
				Grow 1,024
			</div>
		)
	}

	function ProgressBar({text, percent, description}){
		return (
			<div style={{marginTop: '.6em'}}>
				<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
				{description.map((sentence, i) => (<div> {sentence} </div>))}
				</div>
				<div>
					<div
					style={{
						border: '1px solid #dedede',
						marginTop: '1em',
						backgroundColor: '#f5f5f5'
					}}>
						<div
							style={{
								backgroundColor: '#337ab7',
								color: 'white',
								width: percent,
								textAlign: 'center',
								textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
								fontSize: '12px',
							}}>
							{text}
						</div>
					</div>
					<div
						style={{
							border: '1px solid #dedede',
							borderTop: 'none',
							height: '2.5em',
							color: '#7a7a7a',
							justifyContent: 'center',
							display: 'flex',
							alignItems: 'center',
						}}>
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
					Hive Neuron
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1em',
						marginTop: '.9em',
						fontSize: '14px',
						color: '#333',
					}}>
					{hive_neuron.map((sentence, i) => (
						<div> {sentence} </div>
					))}
				</div>
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
					<GrowButton text="Grow 1,024" />
					<GrowButton text="Grow 55.7Qi" />
					<GrowButton text="Grow 226Qi" />
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
				<ProgressBar text="42% 4,910 years" percent='42%' description={faster_neurons} />
				<ProgressBar text="90% 2,213 years" percent='90%' description={twin_neurons} />
			</div>
		</div>

	)
}
