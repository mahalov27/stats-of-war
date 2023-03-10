import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTerms } from "../../../services/fetch";
import reverseDate from "../../../services/reverseDate";
import ordinalNumerals from "../../../services/ordinalNumerals";
import local from "../../../JSON/vocabulary/listStats.json";
import styles from "./ListStats.module.css";

const ListStats = ({ stats }) => {
  const language = useSelector((state) => state.myLanguage);
  const [terms, setTerms] = useState({});

  const listMap = [
    "personnel_units",
    "tanks",
    "armoured_fighting_vehicles",
    "special_military_equip",
    "vehicles_fuel_tanks",
    "mlrs",
    "artillery_systems",
    "atgm_srbm_systems",
    "aa_warfare_systems",
    "cruise_missiles",
    "helicopters",
    "planes",
    "uav_systems",
    "warships_cutters",
  ];

  useEffect(() => {
    try {
      getTerms(language).then((data) => setTerms(data));
    } catch {
      console.error();
    }
  }, [stats, language]);

  return (
    <>
      <div className={styles.block}>
        <h3 className={styles.title}>
          {stats?.date && reverseDate(stats.date)}
        </h3>
        <p className={styles.title}>
          {stats?.day}
          {language === "en" && ordinalNumerals(stats?.day)}
          {local.title[language]}
        </p>
      </div>
      <ul className={styles.list}>
        {stats &&
          listMap.map((listPoint) => (
            <li key={listPoint} className={styles.listItem}>
              <div className={styles.listItemName}>
                <img
                  src={terms?.[listPoint]?.icon}
                  className={styles.listItemImg}
                  alt={terms?.[listPoint]?.title}
                />
                <p className={styles.listItemTitle}>
                  {terms?.[listPoint]?.title}
                </p>
              </div>
              <div>
                <p className={styles.listItemStats}>
                  {stats?.stats?.[listPoint]}{" "}
                  <span className={styles.statsSub}>
                    (+
                    {stats?.increase?.[listPoint]})
                  </span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListStats;
