import React from "react";
import styles from "./StationHeader.module.scss";

export const StationHeader = () => {
	return (
		<div className={styles.stationHeader}>
			<img src="back-arrow.png" />
			<h2>Stations</h2>
			<img src="switch.png" />
		</div>
	);
};
