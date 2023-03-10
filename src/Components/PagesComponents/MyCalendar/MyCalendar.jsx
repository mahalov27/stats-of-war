import { useState } from "react";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import local from "../../../JSON/vocabulary/myCalendar.json"
import "react-calendar/dist/Calendar.css";
import styles from "./MyCalendar.module.css";

const MyCalendar = ({ func, state, date }) => {
  const [attention, setAttention] = useState(false);
  const language = useSelector(state => state.myLanguage)

  const checkDate = () => {
    date ? func() : setAttention(true);
  };

  const hadleChange = (date) => {
    state(date);
    attention && setAttention(false);
  };

  const setLanguage = () => {
    return language === "ua" ? "uk" : "en";
  }

  return (
    <div className={styles.blockCalendar}>
      <form className={styles.calendarForm}>
        <h4 className={styles.title}>{local.title[language]}</h4>
        <Calendar className={styles.calendar} onChange={hadleChange} locale={setLanguage()}/>
        {!attention && <Button name={local.search_btn[language]} func={checkDate}/> }
        {attention && <p className={styles.title}>{local.warning[language]}</p>}
      </form>
    </div>
  );
};

export default MyCalendar;
