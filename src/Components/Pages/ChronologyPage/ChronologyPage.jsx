import { useState, useEffect } from "react";
import { getStatisticList } from "../../../services/fetch";
import { useSelector } from "react-redux";
import ChronologyList from "../../PagesComponents/ChronologyList/ChronologyList";
import ModalView from "../../PagesComponents/ModalView/ModalView";
import local from "../../../JSON/vocabulary/chronologyPage.json";
import styles from "./ChronologyPage.module.css";
import Loader from "../../PagesComponents/Loader/Loader";

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
  }, [offset]);

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
