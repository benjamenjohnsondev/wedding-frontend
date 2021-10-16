import styles from './CustomLink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const CustomButton = (props) => {
    return (
        <button type={props.type}
            className={`btn btn-primary ${styles.primaryButton} ${props.loading ? styles.loading : ''} ${props.className}`}
            onClick={props.onClick} 
            disabled={props.loading ? true : false}>
            {props.loading? '' : ''}
            {props.content}
            <FontAwesomeIcon icon={faSpinner} />
        </button>
    )
}

export default CustomButton