import { useState } from "react";
import { useSelector } from "react-redux";
import { getTodayStatistic } from "../../../services/fetch";
import MyCalendar from "../../PagesComponents/MyCalendar/MyCalendar";
import ListStats from "../../PagesComponents/ListStats/ListStats";
import Button from "../../PagesComponents/Button/Button";
import Error from "../../PagesComponents/Error/Error";
import Loader from "../../PagesComponents/Loader/Loader";
import local from "../../../JSON/vocabulary/chooseDatePage.json";
import getFomatedDate from "../../../services/getFormatedDate";
import styles from "./ChooseDatePage.module.css";
import Message from "../../PagesComponents/Message/Message";

const ChooseDatePage = () => {
  const [date, setDate] = useState("");
  const [statistic, setStatistic] = useState(null);
  const [isCalendar, setIsCalendar] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isToDay, setIsToDay] = useState(false);
  const language = useSelector((state) => state.myLanguage);

  const getDate = () => {
    try {
      getTodayStatistic(date)
        .then((data) => {
          setStatistic(data);
        })
        .catch((err) => {
          if (!statistic) {
            if (getFomatedDate(new Date()) !== getFomatedDate(date)) {
              setIsError(true);
            } else {
              setIsToDay(true)
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
    isToDay && setIsToDay(false)
    setIsCalendar(true);
    setDate("");
  };

  return (
    <>
      {isCalendar && <MyCalendar func={getDate} state={setDate} date={date} />}
      {!isCalendar && (
        <div className={styles.btn}>
          <Button
            name={local.another_date_btn[language]}
            func={HandleBackToCalendar}
          />
        </div>
      )}
      {!isError && !isCalendar && !statistic && !isToDay && <Loader />}
      {!isError && !isCalendar && !isToDay && <ListStats statsProp={statistic} dateProp={date}/>}
      {isToDay &&  <Message />}         
      {isError && <Error />}
    </>
  );
};

export default ChooseDatePage;
