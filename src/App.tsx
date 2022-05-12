import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { RootState } from "./app/store";
import { BottomBar } from "./components/BottomBar/BottomBar";
import { StationCard } from "./components/StationCard/StationCard";
import { StationHeader } from "./components/StationHeader/StationHeader";

function App() {
  const stations = useSelector((state: RootState) => state.stations.names);

  return (
    <div className="appContainer">
      <StationHeader />
      <div className="stationContainer">
        {stations.map((station) => (
          <StationCard key={station.id} {...station} />
        ))}
      </div>
      <BottomBar currentFM="Putin FM" />
    </div>
  );
}

export default App;
