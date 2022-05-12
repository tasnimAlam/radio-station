import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStation } from "../interfaces/station";

interface StationState {
  names: IStation[];
  currentFM: null | string;
}

const initialState: StationState = {
  names: [
    { id: 1, name: "Putin FM", number: 66.6 },
    { id: 2, name: "Dribble FM", number: 101.2 },
    { id: 3, name: "Doge FM", number: 99.4 },
    { id: 4, name: "Ballads FM", number: 87.1 },
    { id: 5, name: "Maximum FM", number: 142.2 },
  ],
  currentFM: null,
};

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<IStation>) => {
      state.names.push(action.payload);
    },
    setCurrent: (state, action: PayloadAction<string>) => {
      state.currentFM = action.payload;
    },
  },
});

export const { setStations, setCurrent } = stationSlice.actions;

export default stationSlice.reducer;
