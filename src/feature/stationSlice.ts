import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IStation } from "../interfaces/station";

interface StationState {
  names: IStation[];
  currentFM: null | string;
}

const initialState: StationState = {
  names: [],
  currentFM: null,
};

const URL = "data.json";

export const getStations = createAsyncThunk(
  "stations/getStations",
  async () => {
    const response = await fetch(URL);

    return (await response.json()) as IStation[];
  }
);

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action: PayloadAction<IStation>) => {
      state.names.push(action.payload);
    },
    setCurrent: (state, action: PayloadAction<string>) => {
      state.currentFM =
        action.payload === state.currentFM ? null : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStations.pending, (state, action) => {
      console.log("pending", action);
    });
    builder.addCase(getStations.fulfilled, (state, { payload }) => {
      console.log("fullfilled", payload);
      state.names = payload;
    });
    builder.addCase(getStations.rejected, (state, action) => {
      console.log("rejected", action);
    });
  },
});

export const { setStations, setCurrent } = stationSlice.actions;

export default stationSlice.reducer;
