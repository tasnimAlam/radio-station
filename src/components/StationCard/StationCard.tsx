import React from "react";
import styles from "./StationCard.module.scss";

export const StationCard = () => {
  return (
    <div className={styles.container}>
      <img className={styles.minusIcon} src="minus.png" alt="minus-logo" />
      <img className={styles.fmLogo} src="fm_logo.svg" alt="fm-logo" />
      <img className={styles.plusIcon} src="plus.png" alt="plug-logo" />
    </div>
  );
};
