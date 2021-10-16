import {useState, useEffect} from 'react';
import Link from 'next/link';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from '../lib/fetchJson';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { user, mutateUser } = useUser()
  const [open, setOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter()

  const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    if (!visible) {
      setOpen(false)
    }

    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    if (window.innerWidth < 900) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <header className={`${styles.header}`}>
      {!user?.isLoggedIn && (
        <ul className={`${styles.userActions} ${visible ? '' : styles.hidden}`}>
          <div className='container'>
            <li className={`${styles.logout}`}>
              <a
                className={styles.logout}
                href='/api/logout'
                onClick={async (e) => {
                  e.preventDefault()
                  mutateUser(
                    await fetchJson('/api/logout', { method: 'POST' }),
                    false
                  )
                  router.push('/')
                }}
              >
                <span>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
              </a>
            </li>
          </div>
        </ul>
      )}
      {user?.isLoggedIn && (
        <ul className={`${styles.userActions} ${visible ? '' : styles.hidden}`}>
          <div className='container'>
            <li className={`${styles.logout}`}>
              <a
                className={styles.logout}
                href='/api/logout'
                onClick={async (e) => {
                  e.preventDefault()
                  mutateUser(
                    await fetchJson('/api/logout', { method: 'POST' }),
                    false
                  )
                  router.push('/')
                }}
              >
                <span>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
              </a>
            </li>
          </div>
        </ul>
      )}
      <div className={`${styles.burgerMenu} ${open && styles.openBurger} ${visible ? '' : styles.hidden}`} onClick={() => setOpen(!open)}>
        <div className={`${styles.line} ${styles.top ?? ''}`}></div>
        <div className={`${styles.line} ${styles.middle ?? ''}`}></div>
        <div className={`${styles.line} ${styles.bottom ?? ''}`}></div>
      </div>
      <nav className={`${styles.nav} ${open && styles.openMenu}`}>
        <ul className={`${styles.mainNav} container`}>
          {user?.isLoggedIn && (
            <>
              <li className={`${styles.li} ${styles.whenWhere} ${styles.link}`}>
                <Link href='/details#when-where'>
                  <a className={`${styles.a}`} onClick={() => setOpen(false)}>
                    When &amp; Where
                  </a>
                </Link>
              </li>
              <li className={`${styles.li} ${styles.dayInfo} ${styles.link}`}>
                <Link href='/details#day-info'>
                  <a className={`${styles.a}`} onClick={() => setOpen(false)}>
                    Day Info
                  </a>
                </Link>
              </li>
              <li className={`${styles.li} ${styles.placesToStay} ${styles.link}`}>
                <Link href='/details#places-to-stay'>
                  <a className={`${styles.a}`} onClick={() => setOpen(false)}>
                    Places to stay
                  </a>
                </Link>
              </li>
              <li className={`${styles.li} ${styles.rsvp} ${styles.link}`}>
                <Link href='/rsvp'>
                  <a className={`${styles.a}`} onClick={() => setOpen(false)}>
                    R.S.V.P.
                  </a>
                </Link>
              </li>
            </>
          )}
          <li className={`${styles.li}`} id={`${styles.logo}`}>
            <a className={`${styles.a}`} href={user?.isLoggedIn ? '/details' : '/'}>
              <img src='/logo.svg' width='273' height='92' />
            </a>
          </li>
        </ul>
        <div className={`${styles.li} ${styles.mobileLogo}`} id={`${styles.mobileLogo}`}>
            <a className={`${styles.a}`} href={user?.isLoggedIn ? '/details' : '/'}>
              <img src='/logo.svg' width='273' height='92' />
            </a>
          </div>
      </nav>
    </header>
  )
}

export default Header
