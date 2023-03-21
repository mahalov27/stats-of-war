import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.linkLogo}>
         <img src={process.env.PUBLIC_URL + '/images/ukraineRed.png'} className={styles.logo} alt="logo"/>
      </Link>
    </div>
  );
};

export default Header;
