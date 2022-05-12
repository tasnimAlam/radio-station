import React from "react";
import styles from "./StationCard.module.scss";

export const StationCard = () => {
  return (
    <div className={styles.container}>
      <img className={styles.minusIcon} src="minus.png" />
      <img className={styles.fmLogo} src="fm_logo.svg" />
      <img className={styles.plusIcon} src="plus.png" />
    </div>
  );
};
