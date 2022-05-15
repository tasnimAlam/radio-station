import React from "react";
import styles from "./StationCard.module.scss";

export const StationCard = () => {
  const onMinusClick = () => {};
  const onPlusClick = () => {};

  return (
    <div className={styles.container}>
      <img
        className={styles.minusIcon}
        src="minus.png"
        alt="minus-logo"
        onClick={() => onMinusClick()}
      />
      <img className={styles.fmLogo} src="fm-logo.svg" alt="fm-logo" />
      <img
        className={styles.plusIcon}
        src="plus.png"
        alt="plug-logo"
        onClick={() => onPlusClick()}
      />
    </div>
  );
};
