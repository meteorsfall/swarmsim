import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import {bugCards} from '../src/constants';

const initialState = {
	"Meat": {
		quantity: 174e102,
	},
	"Drone": {
		quantity: 6.86e90,
		faster: 43,
		twin: 103,
	},
	"Queen": {
		quantity: 1.75e78,
		faster: 38,
		twin: 91,
	},
	"Nest": {
		quantity: 9.53e66,
		faster: 33,
		twin: 78,
	},
	"Greater Queen": {
		quantity: 158e54,
		faster: 28,
		twin: 66,
	},
	"Hive": {
		quantity: 25e45,
		faster: 24,
		twin: 55,
	},
	"Hive Queen": {
		quantity: 16.1e36,
		faster: 20,
		twin: 45,
	},
	"Hive Empress": {
		quantity: 49e27,
		faster: 16,
		twin: 36,
	},
	"Neuroprophet": {
		quantity: 954e18,
		faster: 13,
		twin: 28,
	},
	"Hive Neuron": {
		quantity: 373e27,
		faster: 10,
		twin: 23,
	},
	"Neural Cluster": {
		quantity: 1.44e24,
		faster: 8,
		twin: 13,
	},
	"Hive Network": {
		quantity: 28149,
		faster: 1,
	},
	"Lesser Hive Mind":{
		quantity: 0,
	},
};

const bugsSlice = createSlice({
	name: 'bugs',
	initialState,
	reducers: {
		updateBugAttr: (state, action) => {
			const {bugName, attr, value } = action.payload;
			state[bugName][attr] = value;
		},
		setBug: (state, action) => {
			const {bugName, data } = action.payload;
			state[bugName] = data;
		},
		incrementBugQuantities: (state) => {
			for (const bug of Object.keys(state)) {
				const child = bugCards[bug]?.child;
				if (!child) continue;
				const prod = bugCards[bug]?.production || 0;
				const multiplier = 2 ** (state[bug]?.faster || 0);
				state[child].quantity += prod * multiplier * state[bug].quantity;

console.log(`+${prod * multiplier} ${child}s`);
			}
		}
	}
});

export const { updateBugAttr, setBug, incrementBugQuantities } = bugsSlice.actions;
export const selectBugAttr = (bugName, attr) => (state) => state.bugs[bugName]?.[attr];
export const selectBug = (bugName) => (state) => state.bugs[bugName];
export default bugsSlice.reducer;
