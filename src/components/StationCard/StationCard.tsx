import React from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../../feature/stationSlice";
import { IStation } from "../../interfaces/station";
import style from "./StationCard.module.scss";

export const StationCard = (station: IStation) => {
  const dispatch = useDispatch();

  return (
    <div
      className={style.stationList}
      onClick={() => dispatch(setCurrent(station.name))}
    >
      <span>{station.name}</span>
      <span>{station.number}</span>
    </div>
  );
};
