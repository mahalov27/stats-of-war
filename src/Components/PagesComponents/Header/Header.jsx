import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/stats-of-war" className={styles.linkLogo}>
         <img src="./images/ukraineRed.png" className={styles.logo} alt="logo"/>
      </Link>
    </div>
  );
};

export default Header;
