import React from "react";
import styles from "./BottomBar.module.scss";

interface IBottomBar {
  currentFM: string;
}

export const BottomBar = ({ currentFM }: IBottomBar) => {
  return (
    <div className={styles.bottomBarContainer}>
      <div className={styles.bottomBarTitle}>CURRENTLY PLAYING</div>
      <div className={styles.currentFM}>{currentFM}</div>
    </div>
  );
};
