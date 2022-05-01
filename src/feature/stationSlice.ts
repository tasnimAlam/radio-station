import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stations: [],
};

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {},
});

export default stationSlice.reducer;
