
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Territory: 0,
};

const territorySlice = createSlice({
  name: "territory",
  initialState,
  reducers: {
  },
});

export const {
} = territorySlice.actions;
export const selectBugAttr = (bugName, attr) => (state) =>
  state.bugs[bugName]?.[attr];
export const selectTerritory = (state) => state.territory["Territory"];
export default territorySlice.reducer;
