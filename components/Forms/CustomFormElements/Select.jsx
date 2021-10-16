import { useState } from 'react';
import styles from './Select.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Select = ({ id, label = null, name, required, parentValue, initialValue, options, onChange }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <div className={styles.inputWrapper}>
            {label ? <label className={`${styles.formLabel} ${styles.filled}`} htmlFor={id}>{label}</label>: null}
            <select required={required?true:false} className={`${styles.select} ${styles.formControl} form-control`}
                id={id}
                name={name}
                value={parentValue ? parentValue : value}
                onChange={onChange ? onChange : e => setValue(e.target.value)} >
                {options ? options?.map((option, i) => <option key={i} value={option.value}>{option.label}</option>) : null}
            </select>
            <div className={styles.chevron}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
};

export default Select;