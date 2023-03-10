import { useState, useEffect } from "react";
import ListStats from "../ListStats/ListStats";
import { getTodayStatistic } from "../../../services/fetch";
import styles from "./ModalView.module.css";

const ModalView = ({ props, func }) => {
  const [statistic, setSatistic] = useState({});

  useEffect(() => {
    try {
      getTodayStatistic(props).then((data) => setSatistic(data));
    } catch {
      console.error();
    }
  }, [props]);

  return (
    statistic && (
      <div className={styles.block}>
        <div className={styles.btn} onClick={func}></div>
        <div className={styles.window}>
          <ListStats stats={statistic} />
        </div>
      </div>
    )
  );
};

export default ModalView;
