import { useState, useEffect } from "react";
import { getTodayStatistic } from "../../../services/fetch";
import ListStats from "../../PagesComponents/ListStats/ListStats";
import Loader from "../../PagesComponents/Loader/Loader";
import notData from "./../../../JSON/notData.json";

const TodayPage = () => {
  const [todayStatistic, setTodayStatistic] = useState([]);

  useEffect(() => {
    try {
      getTodayStatistic(new Date())
        .then((data) => setTodayStatistic(data))
        .catch((err) => setTodayStatistic(notData));
    } catch {
      console.error();
      setTodayStatistic(notData)
    }
  }, []);

  return (
    todayStatistic ?  <ListStats stats={todayStatistic} /> : <Loader size={'40'} heightWrap={'250'} />
  );
};
export default TodayPage;
