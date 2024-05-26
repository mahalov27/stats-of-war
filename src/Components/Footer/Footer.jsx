import Courusel from "../Courusel/Courusel";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Courusel />
      <div className={styles.updBlock}>
        <p className={styles.updText}>
          API:
          <a
            className={styles.updLink}
            href="https://russianwarship.rip"
            target="_blank"
            rel="noreferrer"
          >
            russianWarship.RIP
          </a>
        </p>
        <p className={styles.updText}>
          <a
            className={styles.updLink}
            href="https://github.com/mahalov27"
            target="_blank"
            rel="noreferrer"
          >
            App by Makhalov Maksym
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
