import ListStats from "../ListStats/ListStats";
import styles from "./ModalView.module.css";

const ModalView = ({ dateProp, func }) => {

  return (
    dateProp && (
      <div className={styles.block}>
        <div className={styles.btn} onClick={func}></div>
        <div className={styles.window}>
          <ListStats dateProp={dateProp} />
        </div>
      </div>
    )
  );
};

export default ModalView;
