import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import bugsReducer from "./bugsSlice";
import { UNITS, LONGUNITS } from "../src/helpers/constants";
import larvaeReducer from "./larvaeSlice";
import territoryReducer from "./territorySlice";

export function formatSwarmNumber(num, isLong = false) {
  let sigFigs = 3;
  if (isLong) {
    sigFigs = 6;
  }
  if (num < 100000) return num.toLocaleString();

  const power = Math.floor(Math.log10(num) / 3);
  const unit = UNITS[power] || "";
  const base = num / Math.pow(10, power * 3);
  if (!isLong) {
    return `${base.toPrecision(sigFigs)}${unit}`;
  } else {
    return `${base.toPrecision(sigFigs)} ${LONGUNITS[unit]}`;
  }
}

const initialState = {
/* Energy: 150000,
  Mutagen: 8.32e12,
*/
  Energy: 0,
  Mutagen: 0,
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateResource: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setResources: (state, action) => {
      state = action.payload;
    },
    changeResource: (state, action) => {
      const { name, diff } = action.payload;
      state[name] += diff;
    },
  },
});

export const { updateResource, setResources, changeResource } =
  resourcesSlice.actions;
export const selectResources = (state) => state.resources;

export const store = configureStore({
  reducer: {
    resources: resourcesSlice.reducer,
    bugs: bugsReducer,
    larvae: larvaeReducer,
    territory: territoryReducer,
  },
});
