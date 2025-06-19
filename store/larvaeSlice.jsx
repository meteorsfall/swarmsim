import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  larvaeProduction: 1,
  "Hatchery": 0,
  "Expansion": 0,
  "Larvae": 1e14,
  /* Larvae: 21.15e15*/
};

const larvaeSlice = createSlice({
  name: "larvae",
  initialState,
  reducers: {
    setLarvae: (state, action) => {
      const { data } = action.payload;
      state["Larvae"] = data;
    },
    changeLarvae: (state, action) => {
      const { diff } = action.payload;
      console.log("[changeLarvae]", diff);
      state["Larvae"] += diff;
    },
    incrementLarvae: (state) => {
      const multiplier = 1;
      state["Larvae"] += state["larvaeProduction"] * multiplier;
    },
  },
});

export const {
  setLarvae,
  changeLarvae,
  incrementLarvae,
} = larvaeSlice.actions;

export const selectLarvae = (state) => state.larvae["Larvae"];
export const selectProduction = (state) => state.larvae["larvaeProduction"];
export default larvaeSlice.reducer;
