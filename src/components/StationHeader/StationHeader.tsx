import React from "react";
import styles from "./StationHeader.module.scss";

export const StationHeader = () => {
  const onBackArrowClick = () => {};
  const onSwitchClick = () => {};

  return (
    <div className={styles.header}>
      <img
        className={styles.icon}
        src="back-arrow.png"
        alt="back-arrow"
        onClick={() => onBackArrowClick()}
      />
      <h2 className={styles.title}>STATIONS</h2>
      <img
        className={styles.icon}
        src="switch.png"
        alt="switch"
        onClick={() => onSwitchClick()}
      />
    </div>
  );
};
