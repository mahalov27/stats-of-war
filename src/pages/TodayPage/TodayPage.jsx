import { useState, useEffect } from "react";
import ListStats from "../../components/ListStats/ListStats";

const TodayPage = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    try {
      setDate(new Date())
    } catch {
      console.error();
    }
  }, []);

  return (
    date && <ListStats dateProp={date} />
  );
};
export default TodayPage;
