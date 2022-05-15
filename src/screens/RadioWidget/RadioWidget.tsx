import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { BottomBar } from "../../components/BottomBar/BottomBar";
import { StationCard } from "../../components/StationCard/StationCard";
import { StationHeader } from "../../components/StationHeader/StationHeader";
import { StationItem } from "../../components/StationItem/StationItem";
import { getStations } from "../../feature/stationSlice";
import styles from "./RadioWidget.module.scss";

export const RadioWidget = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStations());
  }, [dispatch]);

  const stations = useSelector((state: RootState) => state.stations.names);
  const currentFM = useSelector((state: RootState) => state.stations.currentFM);

  return (
    <div className={styles.widgetContainer}>
      <StationHeader />
      <div className={styles.stationContainer}>
        {stations.map((station) => (
          <div key={station.id}>
            <StationItem {...station} />
            {currentFM && currentFM === station.name && <StationCard />}
          </div>
        ))}
      </div>
      <BottomBar currentFM={currentFM} />
    </div>
  );
};
