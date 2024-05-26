import { useState } from "react";
import { useSelector } from "react-redux";
import { getTodayStatistic } from "../../../src/services/fetch";
import MyCalendar from "../../components/MyCalendar/MyCalendar";
import ListStats from "../../components/ListStats/ListStats";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import local from "../../../src/jsons/vocabulary/chooseDatePage.json";
import getFomatedDate from "../../../src/utils/getFormatedDate";
import styles from "./ChooseDatePage.module.css";

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
