import { useSelector } from "react-redux";
import reverseDate from "../../../services/reverseDate";
import ordinalNumerals from "../../../services/ordinalNumerals"
import Button from "../Button/Button"
import local from "../../../JSON/vocabulary/chronologyPage.json"
import styles from "./ChronologyList.module.css";


const ChronologyList = ({ array, funcMore, funcModale  }) => {
    const language = useSelector(state => state.myLanguage)

    const getTotalValue = (stats) => {
        let totalValue = 0;
        for (const key in stats) {
          key !== "personnel_units" && (totalValue += stats[key]);
        }
        return totalValue;
      };

    return (
        <div className={styles.blockList}>
        <ul className={styles.list}>
          {array &&
            array.map((data) => (
              <li key={data.date} className={styles.listItem}>
                <div className={styles.listItemBlockTitle}>
                  <h4 className={styles.listItemTitle}>
                    {data.day}
                    <span>{language === "en" && ordinalNumerals(data.day)}{local.date[language]}</span>
                  </h4>
                  <p className={styles.listItemTitle}>{reverseDate(data.date)}</p>
                </div>
                <div className={styles.blockInfo}>
                  <div className={styles.infoItem}>
                    <p>{local.personnel_units[language]}</p>
                    <p>{data.stats?.personnel_units}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <p>{local.technology_in_general[language]}</p>
                    <p>{getTotalValue(data.stats)}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <a
                      href={data.resource}
                      className={styles.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {local.link_to_data_mod[language]}
                    </a>
                    <Button id={data.date} name={local.btn_datails[language]} func={funcModale}/>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className={styles.btnMore}>
           <Button name={local.btn_more[language]} func={funcMore}/>
        </div>
      </div>
    )
}

export default ChronologyList