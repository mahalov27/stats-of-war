import { useSelector } from "react-redux";
import getFomatedDate from "../../utils/getFormatedDate";
import reverseDate from "../../utils/reverseDate";
import local from "../../jsons/vocabulary/error.json";
import styles from "./Error.module.css";

const Error = () => {
  const language = useSelector((state) => state.myLanguage);
  return (
    <div className={styles.block}>
      <div className={styles.blockError}>
        <div className={styles.blockImg}>
          <img
            src={process.env.PUBLIC_URL + '/images/nuclear_mushroom.png'}
            className={styles.img}
            alt="error icon"
          />
        </div>
        <div className={styles.blockText}>
          <h4 className={styles.text}>{local.title[language]}</h4>
          <p className={styles.textUpd}>
            {local.description_one_part_one[language]}
            {reverseDate(getFomatedDate(new Date()))}
            {local.description_one_part_two[language]}
          </p>
          <p className={styles.textUpd}>{local.description_two[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
