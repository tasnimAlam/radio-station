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
		{
			id: 1,
			name: "One",
			number: 1,
		},
		{
			id: 2,
			name: "Two",
			number: 2,
		},
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
