import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.scss'

const Form = ({ errorMessages: errorMessages, successMessage, onSubmit, children }) => {

  const [successStyle, setsuccessStyle] = useState();
  const [timer, setTime] = useState();

  useEffect(() => {
      if (successMessage) {
        setsuccessStyle(styles.show)
        setTimer()
      }
      return () => {
        setsuccessStyle(styles.hide)
        clearTimeout(timer)
      }
  }, [successMessage, onSubmit]);

  function setTimer() {
    // clear any existing timer
    timer != null ? clearTimeout(this._timer) : null;

    // hide after `delay` milliseconds
    timer = setTimeout(function(){
      setsuccessStyle(styles.hide)
      timer = null;
    }.bind(this), 2000);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      {errorMessages ? errorMessages?.map((error, i) => <p key={i} className={styles.error}>{error}</p>) : null}
      {successMessage ? <p className={`container ${styles.success} ${successStyle}`}><span className={styles.inner}>{successMessage}</span></p> : null}
    </form>
  )
}

export default Form

Form.propTypes = {
  errorMessages: PropTypes.array,
  successMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
