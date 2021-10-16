import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
        <footer className={styles.footer}>
            <div className={`${styles.footerInner} container`}>
                <span>Made with <FontAwesomeIcon icon={faHeart} height='1rem' /></span><span className={styles.separator}>|</span><span> P.S. If you've got any questions please get in touch - you know how to find us!</span>
            </div>
        </footer>
    )
}

export default Footer;