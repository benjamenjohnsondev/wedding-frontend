import styles from './BoxImageContent.module.scss';
import Image from 'next/image';

const BoxImageContent = (props) => {
    return (
        <div id={props.id} className={styles.boxWrapper}>
            <div className={`${styles.leftContent} ${styles[`width${props.contentWidth}`]}`}>
                <div className={styles.lineContent}>
                    <a href={props.arrowLink} className={props.arrowLink ? styles.arrowLink : ''}>
                        {props.lineContent}
                        <div className={styles.arrow}></div>
                    </a>
                </div>
                <div className={`${styles.block} ${styles.blockLeft}`}>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.detailsImg}>
                        <Image src={props.imgSrc} quality='95'/>
                    </div>
                </div>
                <div className={`${styles.block} ${styles.blockRight}`}></div>
            </div>
        </div>
    );
}

export default BoxImageContent;