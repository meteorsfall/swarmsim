import React, {useState} from 'react';
import './index.css';
import Pages from './Pages';
import { bugNames } from './constants';

export default function Tabs() {

	const quantities = ["0", "28,149", "84.2M", "100T", "954Qi", "49.0Oc", "16.1UDc", "25.0QaDc", "158SpDc", "9.53UVi", "1.75QiVi", "6.86NVi", "174TTg"]
	const showIcons = [false, false, true, true, true, true, true, true, true, true, false]

	function Bug({name, quantity, showIcon = false}) {
		return (
			<div className="tabBug"
				style={{
					position: 'relative',
					borderLeft: 'none',
					borderRight: 'none',
					borderTop: 'none',
					borderBottom: '1px solid #dddddd',
					paddingLeft: '2.7em',
					paddingTop: '.9em',
					paddingBottom: '.9em',
					paddingRight: '1em',
					width: '210px',
				}}>
				{name}
				<span className="floatRight"> {quantity} </span>
				<div>
			<i class="fa-solid fa-circle-arrow-up"
				style={{
					display: showIcon ? 'block' : 'none',
					position: 'absolute',
					left: '.4em',
					top: '.8em',
					color: 'black',
				}}></i>
				</div>
			</div>
		)
	}

	return (
		<div style={{marginTop: '.5em'}}>
			<div
				style={{
					display:'flex',
					flexDirection: 'row',
					borderBottom: '1px solid #dddddd',
				}}>
				<div className="tab" style={{color: '#555'}}> 59.7TTg meat
					<i class="fa-solid fa-circle-arrow-up icon-space"></i>
				</div>
				<div className="tab"> 21.1Qa larvae </div>
				<div className="tab"> 85.4TVi territory
					<i class="fa-solid fa-circle-arrow-up icon-space"></i>
				</div>
				<div className="tab"> 150K energy (69%) </div>
				<div className="tab"> 8.32T mutagen (+10.9B) </div>
				<div className="tab"> More... </div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '330px',
						paddingRight: '1em',
						border: 'none',
					}}>
					{bugNames.map((bug, i) => (
						<Bug key={i} name={bug} quantity={quantities[i]} showIcon={showIcons[i]} />
					))}
				</div>
				<Pages />
			</div>
		</div>
			)
}
