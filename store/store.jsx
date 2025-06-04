import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import bugsReducer from './bugsSlice'
import {UNITS, LONGUNITS} from '../src/constants'

export function formatSwarmNumber(num, isLong=false) {
	let sigFigs = 3;
	if (isLong){
		sigFigs = 6;
	}
  if (num < 100000) return num.toLocaleString();

	const power = Math.floor(Math.log10(num) / 3);
	const unit = UNITS[power] || '';
	const base = num / Math.pow(10, power * 3);
	if (!isLong) {
		return `${base.toPrecision(sigFigs)}${unit}`;
	} else {
		return `${base.toPrecision(sigFigs)} ${LONGUNITS[unit]}`;
	}
}


const initialState = {
	"Larvae": 21.1e15,
	"Territory": 85.4e72,
	"Energy": 150000,
	"Mutagen": 8.32e12,
};

const resourcesSlice = createSlice({
	name: 'resources',
	initialState,
	reducers: {
		updateResource: (state, action) => {
			const { name, value } = action.payload;
			state[name] = value;
		},
		setResources: (state, action) => {
			state = action.payload;
		}
	}
});

export const { updateResource, setResources } = resourcesSlice.actions;
export const selectResources = state => state.resources;

export const store = configureStore({
	reducer: {
		resources: resourcesSlice.reducer,
		bugs: bugsReducer
	}
})

