import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from './Header.module.scss'

const Header = ({isLoading}:{isLoading: boolean}) => {
  console.info('loading', isLoading)
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <a href="/" className={styles.headerTitle}>Podcaster</a>
      </div>
      {isLoading && <div className={styles.loadingContainer}>
        <LoadingSpinner/>
      </div>}
    </div>
  )
}

export default Header;