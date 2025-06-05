import React, { useState } from 'react';
import './index.css';
import { bugNames, bugCards } from './constants';
import {useSelector} from 'react-redux';
import { selectResources, updateResource, store, formatSwarmNumber } from '../store/store';
import { selectBugAttr } from '../store/bugsSlice';

export default function computedStats({bugIndex}){
	const bug = bugNames[bugIndex];
	const parent=bugNames[bugIndex-1];
	const bugAmount = useSelector(selectBugAttr(bug, "quantity"));
	const parentAmount = useSelector(selectBugAttr(parent, "quantity"));
	const child=bugNames[bugIndex+1];
	const childAmount = useSelector(selectBugAttr(child, "quantity"));
	const faster = useSelector(selectBugAttr(bug, "faster"));
	const fasterAmount = 66*(666 ** faster);
	const formattedFasterAmount = formatSwarmNumber(fasterAmount);
	const resources = useSelector(selectResources);
	const larvae = resources["Larvae"];
	const meat = useSelector(selectBugAttr("Meat", "quantity"));
	const cost = bugCards[bug]["cost"];
	const costMeat = bugCards[bug]["costMeat"];
	const twin = useSelector(selectBugAttr(bug, "twin"));
	const twinAmount = 10**(twin);
	const formattedTwinAmount = formatSwarmNumber(twinAmount);

	return {
		bug, parent, bugAmount, parentAmount, child, childAmount,
		faster, fasterAmount, formattedFasterAmount, resources, larvae, meat,
		cost, costMeat, twin, twinAmount, formattedTwinAmount,
	}

}

