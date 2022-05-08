import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { RootState } from "./app/store";
import { StationHeader } from "./components/StationHeader/StationHeader";

function App() {
	const stations = useSelector((state: RootState) => state.stations.names);

	return (
		<div className="appWrapper">
			<StationHeader />
		</div>
	);
}

export default App;
