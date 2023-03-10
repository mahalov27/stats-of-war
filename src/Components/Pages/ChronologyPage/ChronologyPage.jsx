import { useState, useEffect } from "react";
import { getStatisticList } from "../../../services/fetch";
import { useSelector } from "react-redux";
import ChronologyList from "../../PagesComponents/ChronologyList/ChronologyList";
import ModalView from "../../PagesComponents/ModalView/ModalView";
import local from "../../../JSON/vocabulary/chronologyPage.json"
import styles from "./ChronologyPage.module.css";

const ChronologyPage = () => {
  const language = useSelector((state) => state.myLanguage);
  const [statistic, setStatistic] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isActiveModale, setIsActiveModale] = useState(false);
  const [date, setDate] = useState('');

  useEffect(() => {
    try {
      getStatisticList(offset).then((data) =>
        statistic.length === 0
          ? setStatistic(data)
          : setStatistic((prevState) => [...prevState, ...data])
      );
    } catch {
      console.error();
    }
  }, [offset]);

  const handleModale = (event) => {
    setDate(event.target.id);
    !isActiveModale ? setIsActiveModale(true) : setIsActiveModale(false);
  };

  const handlePagination = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{local.title[language]}</h2>
      <ChronologyList array={statistic} funcMore={handlePagination} funcModale={handleModale}/>
      {isActiveModale && <ModalView func={handleModale} props={date}/>}
    </div>
  );
};

export default ChronologyPage;
