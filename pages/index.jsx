import { useState } from 'react'
import fetchJson from '../lib/fetchJson'
import useUser from '../lib/useUser'
import Head from 'next/head'
import Form from '../components/Form'
import Input from '../components/Forms/CustomFormElements/Input'
import CustomButton from '../components/Elements/CustomButton'
import BoxImageContent from '../components/Layouts/BoxImageContent'
import styles from './index.module.scss'
import LineBreak from '../components/LineBreak'
import Footer from '../components/Footer'
import LoginImage from '../public/engaged.jpg'

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/details',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault()

    const body = {
      'party_name': e.currentTarget.party_name.value,
      'password': e.currentTarget.password.value,
    }

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      setErrorMsg(error.data.message)
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Ben and Anni - 13.08.22</title>
      </Head>
      <main className={`${styles.loginWrapper} container`}>
        <div className={styles.contentLeftWrapper}>
          <BoxImageContent arrowLink='#login' lineContent="we're getting married!" imgSrc={LoginImage} contentWidth='55'/>
        </div>
        <div id='login' className={styles.login}>
            <a className={`${styles.a} ${styles.logo}`} href='/'>
              <img src='/logo.svg' width='273' height='92' />
            </a>
            <h1>Ben and Anni</h1>
            <p className='fontLight centered medium'>13.08.22</p>
            <LineBreak/>
          <div className={styles.loginFormWrapper}>
            <h3>Sign In</h3>
            <Form class={styles.loginForm} errorMessages={errorMsg} onSubmit={handleSubmit} >
              <div className='mb-3'>
                  <Input
                      id='party_name'
                      label='Party name'
                      name='party_name'
                      required
                      type='text'
                      value=''
                  />
              </div>
              <div className='mb-3'>
                  <Input
                      id='password'
                      label='Password'
                      name='password'
                      required
                      type='password'
                  />
              </div>
              <CustomButton type='submit'
                loading={loading}
                content='Login'/>
            </Form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Login
