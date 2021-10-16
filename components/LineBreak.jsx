import styles from './LineBreak.module.scss'

const LineBreak = (props) => {
    return (
        <div className={`${styles.lineBreakWrapper} ${props.className}`}>
            <div className={styles.lineBreak}></div>
        </div>
    )
}

export default LineBreak;