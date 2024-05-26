import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStatisticList } from "../../services/fetch";
import ChronologyList from "../../components/ChronologyList/ChronologyList";
import ModalView from "../../components/ModalView/ModalView";
import Loader from "../../components/Loader/Loader";
import local from "../../jsons/vocabulary/chronologyPage.json";
import styles from "./ChronologyPage.module.css";

const ChronologyPage = () => {
  const language = useSelector((state) => state.myLanguage);
  const [statistic, setStatistic] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isActiveModale, setIsActiveModale] = useState(false);
  const [date, setDate] = useState("");

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
  }, [offset, statistic.length]);

  const handleModale = (event) => {
    const body = document.querySelector("body");
    setDate(event.target.id);
    !isActiveModale ? setIsActiveModale(true) : setIsActiveModale(false);
    body.classList.toggle("desableScroll");
  };

  const handlePagination = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{local.title[language]}</h2>
      {statistic.length > 0 ? (
        <ChronologyList
          array={statistic}
          funcMore={handlePagination}
          funcModale={handleModale}
        />
      ) : (
        <Loader size={"40"} heightWrap={"150"} />
      )}
      {isActiveModale && <ModalView func={handleModale} dateProp={date} />}
    </div>
  );
};

export default ChronologyPage;
