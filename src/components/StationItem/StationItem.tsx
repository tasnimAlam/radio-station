import React from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../../feature/stationSlice";
import { IStation } from "../../interfaces/station";
import style from "./StationItem.module.scss";

export const StationItem = (station: IStation) => {
  const dispatch = useDispatch();

  return (
    <div
      className={style.list}
      onClick={() => dispatch(setCurrent(station.name))}
    >
      <span>{station.name}</span>
      <span>{station.number}</span>
    </div>
  );
};
