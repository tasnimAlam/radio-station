import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StationState {
  names: string[];
}

const initialState: StationState = {
  names: ["One", "Two"],
};

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<string>) => {
      state.names.push(action.payload);
    },
  },
});

export const { setStations } = stationSlice.actions;

export default stationSlice.reducer;
