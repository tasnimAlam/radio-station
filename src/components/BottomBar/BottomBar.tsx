import React from "react";
import styles from "./BottomBar.module.scss";

interface IBottomBar {
  currentFM: string | null;
}

export const BottomBar = ({ currentFM }: IBottomBar) => {
  return (
    <div className={styles.container}>
      {currentFM && (
        <>
          <div className={styles.title}>CURRENTLY PLAYING</div>
          <div className={styles.currentFM}>{currentFM}</div>
        </>
      )}
    </div>
  );
};
