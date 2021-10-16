import styles from './Loading.module.scss'

const Loading = () => {
  return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} ${styles.first} ${styles.loadingAnimation}`}></div>
            <div className={`${styles.content} ${styles.second}`}>
                <div className={`${styles.w33} ${styles.loadingAnimation}`}></div>
                <div className={`${styles.w66} ${styles.loadingAnimation}`}></div>
            </div>
            <div className={`${styles.content} ${styles.thrid} ${styles.loadingAnimation}`}></div>
        </div>
    )
}

export default Loading;