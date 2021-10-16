import styles from './CustomLink.module.scss';
import Link from 'next/link';

const CustomLink = (props) => {
    return (
        <Link href={props.url ?? ''}>
            <a className={`${styles.primaryButton} ${props.styleClasses} btn btn-primary`}>
                {props.content}
            </a>
        </Link>
    )
}

export default CustomLink