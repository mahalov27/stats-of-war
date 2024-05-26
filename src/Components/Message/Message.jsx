import { useSelector } from "react-redux";
import local from "../../jsons/vocabulary/listStats.json";
import styles from "./Message.module.css";

const Message = () => {
  const language = useSelector((state) => state.myLanguage);
  return (
    <div className={styles.messageBlock}>
      <p className={styles.message}>{local.no_data[language]}</p>
    </div>
  );
};

export default Message;
