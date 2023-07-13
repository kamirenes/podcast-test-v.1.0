// import { useTranslation } from "react-i18next";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from './Header.module.scss'

const Header = () => {
  // const { t } = useTranslation();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <a href="" className={styles.headerTitle}>Podcaster</a>
      </div>
      <div className={styles.loadingContainer}>
        <LoadingSpinner/>
      </div>
    </div>
  )
}

export default Header;