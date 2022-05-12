import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { RootState } from "./app/store";
import { BottomBar } from "./components/BottomBar/BottomBar";
import { StationItem } from "./components/StationItem/StationItem";
import { StationHeader } from "./components/StationHeader/StationHeader";
import { StationCard } from "./components/StationCard/StationCard";

function App() {
  const stations = useSelector((state: RootState) => state.stations.names);
  const currentFM = useSelector((state: RootState) => state.stations.currentFM);

  return (
    <div className="appContainer">
      <StationHeader />
      <div className="stationContainer">
        {stations.map((station) => (
          <>
            <StationItem key={station.id} {...station} />
            {currentFM && currentFM === station.name && <StationCard />}
          </>
        ))}
      </div>
      <BottomBar currentFM={currentFM} />
    </div>
  );
}

export default App;
