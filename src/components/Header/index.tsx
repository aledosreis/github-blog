import headerImg from "../../assets/headerImg.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <a href="/">
        <img src={headerImg} />
      </a>
    </div>
  );
}
