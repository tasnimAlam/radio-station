import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStation {
  id: number;
  name: string;
  number: number;
}

interface StationState {
  names: IStation[];
}

const initialState: StationState = {
  names: [
    { id: 1, name: "Putin FM", number: 66.6 },
    { id: 2, name: "Dribble FM", number: 101.2 },
    { id: 3, name: "Doge FM", number: 99.4 },
    { id: 4, name: "Ballads FM", number: 87.1 },
    { id: 5, name: "Maximum FM", number: 142.2 },
  ],
};

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<IStation>) => {
      state.names.push(action.payload);
    },
  },
});

export const { setStations } = stationSlice.actions;

export default stationSlice.reducer;
