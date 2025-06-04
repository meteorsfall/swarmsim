import React, {useState} from 'react';
import './index.css';
import Pages from './Pages';
import { bugNames, bugCards } from './constants';
import { useSelector, useDispatch } from 'react-redux';
import { selectResources, updateResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr } from '../store/bugsSlice';

export default function Tabs() {
	const resources = useSelector(selectResources);
	const bug_quantities = Object.fromEntries(bugNames.map((bug) => [bug, useSelector(selectBugAttr(bug, "quantity"))]));
	const combined = { ...resources, ...bug_quantities};
	const dispatch = useDispatch();
	const showIcons = [false, false, true, true, true, true, true, true, true, true, false];
	const namedAmount = (key) => formatSwarmNumber(combined[key]);
	const [pageIndex, setPageIndex] = useState(3);

	function Bug({bugIndex, quantity, showIcon = false}) {
		const bug = bugNames[bugIndex];
		return (
			<div className="tabBug" onClick={() => setPageIndex(bugIndex)}
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
				{bug}
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
				<div className="tab" style={{color: '#555'}}> {namedAmount("Meat")} meat
					<i class="fa-solid fa-circle-arrow-up icon-space"></i>
				</div>
				<div className="tab"> {namedAmount("Larvae")} larvae </div>
				<div className="tab"> {namedAmount("Territory")} territory
					<i class="fa-solid fa-circle-arrow-up icon-space"></i>
				</div>
				<div className="tab"> {namedAmount("Energy")} energy (69%) </div>
				<div className="tab"> {namedAmount("Mutagen")} mutagen (+10.9B) </div>
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
						<Bug key={i} bugIndex={i} quantity={namedAmount(bug)} showIcon={showIcons[i]} />
					))}
				</div>
				<Pages bugIndex={pageIndex}/>
			</div>
		</div>
			)
}
