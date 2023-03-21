import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import donateList from "./../../../JSON/donateList.json";
import styles from "./Courusel.module.css";

const Courusel = () => {
  const language = useSelector((state) => state.myLanguage)
  const [index, setIndex] = useState(0);


  useEffect(() => {
    setTimeout(nextIndex, 5000);
  }, [index]);

  const nextIndex = () => {
    index < donateList.length - 1 && setIndex(index + 1);
    index === donateList.length - 1 && setIndex(0);
  };

  return (
    <div className={styles.list}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={donateList[index].id}
          className={styles.listItem}
          initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
          <a
            href={donateList[index].link}
            className={styles.linkItem}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + donateList[index].poster}
              className={styles.img}
              alt={donateList[index].name.en}
            />
            <p className={styles.text}>{donateList[index].name[language]}</p>
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Courusel;
