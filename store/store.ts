import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	quantities: {
		"Lesser Hive Mind": "0",
		"Hive Network": "28,149",
		"Neural Cluster": "84.2M",
		"Hive Neuron": "100T",
		"Neuroprophet": "954Qi",
		"Hive Empress": "49.0Oc",
		"Hive Queen": "16.1UDc",
		"Hive": "25.0QaDc",
		"Greater Queen": "158SpDc",
		"Nest": "9.53UVi",
		"Queen": "1.75QiVi",
		"Drone": "6.86NVi",
		"Meat": "174TTg",
	}
};

const quantitiesSlice = createSlice({
	name: 'quantities',
	initialState,
	reducers: {
		updateQuantity: (state, action) => {
			const { name, value } = action.payload;
			state.quantities[name] = value;
		},
		setQuantities: (state, action) => {
			state.quantities = action.payload;
		}
	}
});

export const { updateQuantity, setQuantities } = quantitiesSlice.actions;
export const selectQuantities = state => state.quantities.quantities;
export default quantitiesSlice.reducer
