import React from "react";
import style from "./StationCard.module.scss";
import { IStation } from "../../feature/stationSlice";

export const StationCard = (station: IStation) => {
  return (
    <div className={style.stationList}>
      <span>{station.name}</span>
      <span>{station.number}</span>
    </div>
  );
};
