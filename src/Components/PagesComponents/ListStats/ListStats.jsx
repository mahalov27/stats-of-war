import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTerms, getTodayStatistic } from "../../../services/fetch";
import reverseDate from "../../../services/reverseDate";
import getFomatedDate from "../../../services/getFormatedDate";
import ordinalNumerals from "../../../services/ordinalNumerals";
import Loader from "../Loader/Loader";
import local from "../../../JSON/vocabulary/listStats.json";
import styles from "./ListStats.module.css";
import Message from "../Message/Message";

const ListStats = ({ dateProp, statsProp }) => {
  const language = useSelector((state) => state.myLanguage);
  const [terms, setTerms] = useState();
  const [stats, setStats] = useState();
  const [message, setMessage] = useState(false)

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
    setMessage(false)
    if(statsProp){
      setStats(statsProp)
      getTerms(language).then((data) => setTerms(data));
    }else{
      try {
        getTodayStatistic(dateProp)
        .then(data => setStats(data))
        .catch(err => {
          if(getFomatedDate(new Date()) === getFomatedDate(dateProp)){
            setMessage(true)
          }
        })
        getTerms(language).then((data) => setTerms(data));
      } catch {
        console.error();
      }
    }
  }, [dateProp, statsProp, language]);

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
        {
          listMap.map((listPoint) => (
            <li key={listPoint} className={styles.listItem}>
              <div className={styles.listItemName}>
                {terms ? (
                  <img
                    src={terms?.[listPoint]?.icon}
                    className={styles.listItemImg}
                    alt={terms?.[listPoint]?.title}
                  />
                ) : (
                  <Loader widthWrap={"65"} size={"35"} />
                )}
                <p className={styles.listItemTitle}>
                  {terms?.[listPoint]?.title}
                </p>
              </div>
              <div>
                {stats && <p className={styles.listItemStats}>
                  {stats?.stats?.[listPoint]}{" "}
                  <span className={styles.statsSub}>
                    (+
                    {stats?.increase?.[listPoint]})
                  </span>
                </p>}
              </div>
            </li>
          ))}
      </ul>
      {message && <Message />}
    </>
  );
};

export default ListStats;
