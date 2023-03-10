import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../redux/language/languageSlice";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
    const language = useSelector((state) => state.myLanguage);
    const dispatch = useDispatch();

    const handleToggle = () => {
        const langNext = language === 'ua'
        ? 'en'
        : 'ua';
        dispatch(setLanguage(langNext));
        localStorage.setItem("language", langNext);
    }

    return (
        <div className={styles.toggle} onClick={handleToggle}>
            <div className={styles.handle + " " + (language === 'en' && styles.handleChange)}>
                <p className={styles.handleText}>{language === "ua" ? "ua" : "eng"}</p>
                </div>
        </div>
    )
}

export default LanguageToggle