import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { bugCards } from "../src/helpers/constants";

const initialState = {
  /*
  Meat: {
    quantity: 174e102,
  },
  Drone: {
    quantity: 6.86e90,
    faster: 43,
    twin: 103,
    reached66: true,
    bought: true,
  },
  Queen: {
    quantity: 1.75e78,
    faster: 38,
    twin: 91,
    reached66: true,
    bought: true,
  },
  Nest: {
    quantity: 9.53e66,
    faster: 33,
    twin: 78,
    reached66: true,
    bought: true,
  },
  "Greater Queen": {
    quantity: 158e54,
    faster: 28,
    twin: 66,
    reached66: true,
    bought: true,
  },
  Hive: {
    quantity: 25e45,
    faster: 24,
    twin: 55,
    reached66: true,
    bought: true,
  },
  "Hive Queen": {
    quantity: 16.1e36,
    faster: 20,
    twin: 45,
    reached66: true,
    bought: true,
  },
  "Hive Empress": {
    quantity: 49e27,
    faster: 16,
    twin: 36,
    reached66: true,
    bought: true,
  },
  Neuroprophet: {
    quantity: 954e18,
    faster: 13,
    twin: 28,
    reached66: true,
    bought: true,
  },
  "Hive Neuron": {
    quantity: 251e33,
    faster: 12,
    twin: 25,
    reached66: true,
    bought: true,
  },
  "Neural Cluster": {
    quantity: 1.44e24,
    faster: 8,
    twin: 13,
    reached66: true,
    bought: true,
  },
  "Hive Network": {
    quantity: 28149,
    faster: 1,
    twin: 0,
    reached66: true,
    bought: true,
  },
  "Lesser Hive Mind": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  }, */
  Meat: {
        quantity: 35,
  },
  Drone: {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  Queen: {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: true,
    bought: true,
  },
  Nest: {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Greater Queen": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  Hive: {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Hive Queen": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Hive Empress": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  Neuroprophet: {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Hive Neuron": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Neural Cluster": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Hive Network": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
  "Lesser Hive Mind": {
    quantity: 0,
    faster: 0,
    twin: 0,
    reached66: false,
    bought: false,
  },
};

const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    updateBugAttr: (state, action) => {
      const { bugName, attr, value } = action.payload;
      state[bugName][attr] = value;
    },
    setBug: (state, action) => {
      const { bugName, data } = action.payload;
      state[bugName] = data;
    },
    changeBugQuantity: (state, action) => {
      const { bugName, diff } = action.payload;
      console.log("[changeBugQuantity]", bugName, diff);
      state[bugName].quantity += diff;
    },
    changeBugAttr: (state, action) => {
      const { bugName, attr, diff } = action.payload;
      state[bugName][attr] += diff;
    },
    incrementBugQuantities: (state) => {
      for (const bug of Object.keys(state)) {
        const child = bugCards[bug]?.child;
        if (!child) continue;
        if (prod <= 0) continue;
        const prod = bugCards[bug]?.production || 0;
        const multiplier = 2 ** (state[bug]?.faster || 0);
        state[child].quantity += prod * multiplier * state[bug].quantity;

      }
    },
  },
});

export const {
  updateBugAttr,
  setBug,
  changeBugQuantity,
  changeBugAttr,
  incrementBugQuantities,
} = bugsSlice.actions;
export const selectBugAttr = (bugName, attr) => (state) =>
  state.bugs[bugName]?.[attr];
export const selectBug = (bugName) => (state) => state.bugs[bugName];
export default bugsSlice.reducer;
