import React, {useState} from 'react';
import './index.css'

export default function Header() {
	return (
		<div className="left-margin"
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1em',
				marginRight: '10em',
				marginLeft: '10em',
			}}>
		<div className=""
			style={{
				marginTop:'0em',
				border: '1px solid #e7e7e7',
				padding: '.8em',
				color: '#777',
				backgroundColor: '#f8f8f8',
				fontSize: '18px',
				fontFamily: 'sans-serif',
			}}> Swarm Simulator <span style={{display: 'inline-block', marginLeft: '.8em', fontSize: '15px'}}> v1.1.17 </span>
		</div>
		<div className=""
			style={{
				display: 'none',
				border: '1px solid black',
				padding: '1em',
			}}>
		Welcome back! While you were away for 7 minutes, your swarm produced:
		<ul>
			<li> 11.2722 quintillion neuroprophets </li>
			<li> 303.344 septillion hive empresses </li>
			<li> 120.741 decillion hive queens </li>
			<li> 4.99633 trestrigintillion meat </li>
			<li> 1.67750 quadrillion larvae </li>
			<li> 5.40352 tresvigintillion territory </li>
			<li> 684 energy </li>
		</ul>
		</div>
		<div>
		<div style={{display:'flex', flexDirection: 'row'}}>
		<div className="tab" style={{color: '#555'}}> 59.7TTg meat </div>
			<div className="tab"> 21.1Qa larvae </div>
			<div className="tab"> 85.4TVi territory </div>
			<div className="tab"> 150K energy (69%) </div>
			<div className="tab"> 8.32T mutagen (+10.9B) </div>
			<div className="tab"> More... </div>
		</div>


		</div>

		</div>
	)
}
