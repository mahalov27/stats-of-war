import { useSelector } from "react-redux";
import local from "../../../JSON/vocabulary/listStats.json";
import styles from "./Message.module.css";

const Message = () => {
    const language = useSelector(state => state.myLanguage)
    return (
        <div className={styles.wrapper}>
            <div className={styles.messageBlock}>
                <p className={styles.message}>
                    {local.no_data[language]}
                </p>
            </div>
        </div>
    )
} 

export default Message;