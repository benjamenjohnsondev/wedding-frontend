import { useState, useEffect } from 'react';
import styles from './Input.module.scss';

const Input = ({ id, label = null, name, required, type, initialValue, handleChange, upstreamValue = null, useUpstream=false}) => {
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
        if (useUpstream && value != upstreamValue) {
            setValue(upstreamValue)
        }
    });

    function changeTextAreaHeight(e){
        const el = e.target;
        el.style.height = 'auto';

        el.style.height = (25 + el.scrollHeight) + 'px';
    }
    return (
        <div className={styles.inputWrapper}>
            {type === 'textarea'
                ? <textarea required={required?true:false} className={`${styles.formControl} form-control`} id={id} name={name} value={value||''} onChange={e => setValue(e.target.value)} type={type} onKeyUp={changeTextAreaHeight.bind(this)} /> 
                : <input
                    required={required?true:false}
                    className={`${styles.formControl} form-control`}
                    id={id} name={name}
                    value={value || ''}
                    onChange={ handleChange ? handleChange : e => setValue(e.target.value)} type={type}
                />
            }
            {label ? <label className={`${styles.formLabel} ${value && styles.filled}`} htmlFor={id}>{label}</label>: null}
        </div>
    );
};

export default Input;