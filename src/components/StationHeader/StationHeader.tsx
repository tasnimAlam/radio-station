import React from "react";
import style from "./StationHeader.module.scss";

export const StationHeader = () => {
	return (
		<div className={style.stationHeader}>
			<img className={style.icon} src="back-arrow.png" />
			<h2>Stations</h2>
			<img className={style.icon} src="switch.png" />
		</div>
	);
};
