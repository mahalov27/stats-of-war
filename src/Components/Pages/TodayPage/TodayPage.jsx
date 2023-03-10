import { useState, useEffect } from "react";
import { getTodayStatistic } from "../../../services/fetch";
import ListStats from "../../PagesComponents/ListStats/ListStats";
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
    todayStatistic &&  <ListStats stats={todayStatistic} />
  );
};
export default TodayPage;
