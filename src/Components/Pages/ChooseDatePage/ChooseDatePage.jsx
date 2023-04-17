import { useState } from "react";
import { useSelector } from "react-redux";
import { getTodayStatistic } from "../../../services/fetch";
import MyCalendar from "../../PagesComponents/MyCalendar/MyCalendar";
import ListStats from "../../PagesComponents/ListStats/ListStats";
import Button from "../../PagesComponents/Button/Button";
import Error from "../../PagesComponents/Error/Error";
import noData from "./../../../JSON/notData.json";
import local from "../../../JSON/vocabulary/chooseDatePage.json";
import getFomatedDate from "../../../services/getFormatedDate";
import styles from "./ChooseDatePage.module.css";
import Loader from "../../PagesComponents/Loader/Loader";

const ChooseDatePage = () => {
  const language = useSelector((state) => state.myLanguage);
  const [date, setDate] = useState("");
  const [statistic, setStatistic] = useState(null);
  const [isCalendar, setIsCalendar] = useState(true);
  const [isError, setIsError] = useState(false);

  const getDate = () => {
    try {
      getTodayStatistic(date)
        .then((data) => {
          setStatistic(data);
        })
        .catch((err) => {
          if (!statistic) {
            if (getFomatedDate(new Date()) === getFomatedDate(date)) {
              setStatistic(noData);
            } else {
              setIsError(true);
            }
          }
        });
    } catch {
      console.error();
    }
    setIsCalendar(false);
  };

  const HandleBackToCalendar = (e) => {
    e.preventDefault();
    setStatistic(null);
    isError && setIsError(false);
    setIsCalendar(true);
    setDate("");
  };

  return (
    <>
      {isCalendar && <MyCalendar func={getDate} state={setDate} date={date} />}
      {!isCalendar && (
        <div className={styles.btn}>
          <Button name={local.another_date_btn[language]} func={HandleBackToCalendar} />
        </div>
      )}
      {!isError && statistic && <ListStats stats={statistic} />}
      {isError && <Error />}
    </>
  );
};

export default ChooseDatePage;
