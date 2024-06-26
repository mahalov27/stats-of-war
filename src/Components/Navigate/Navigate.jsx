import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import local from "../../jsons/vocabulary/navigation.json";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import styles from "./Navigate.module.css";

const Navigate = () => {
  const LanguageNow = useSelector((state) => state.myLanguage);
  const [isActive, setIsActive] = useState(false);

  const onActive = () => {
    const body = document.querySelector("body");
    setIsActive(!isActive);
    body.classList.toggle("desableScroll");
  };

  return (
    <div
      className={styles.navBlock + " " + (isActive && styles.navBlockActive)}
    >
      <LanguageToggle />
      <div className={styles.btn} onClick={onActive}>
        <div
          className={styles.btnElem + " " + (isActive && styles.btnElemActive)}
        ></div>
      </div>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink} onClick={onActive} end>
              {local.nav_btn_today[LanguageNow]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="choose-a-date"
              className={styles.navLink}
              onClick={onActive}
            >
              {local.nav_btn_certain_date[LanguageNow]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chronology"
              className={styles.navLink}
              onClick={onActive}
            >
              {local.nav_btn_chronology[LanguageNow]}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigate;
