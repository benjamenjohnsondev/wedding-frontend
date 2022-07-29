import useUser from '../lib/useUser'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
import RSVPForm from '../components/Forms/RSVPForm'
import fetcher from '../lib/fetchJson'
import Loading from '../components/Loading'
import styles from './rsvp.module.scss'
import WillamsonPark from '../public/Williamson_Park_2.jpg'
import Image from 'next/image'
import RSVPFormClosed from '../components/Forms/RSVPFormClosed'

const SgProfile = () => {
  const { user } = useUser({ redirectTo: '/' });
  const [errorMsg, setErrorMsg] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [saving, setSaving] = useState(false);

  if (!user || user.isLoggedIn === false) {
    return (
      <Layout>
      <Head>
        <title>My RSVP</title>
      </Head>
      <Loading/>
    </Layout>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true);

    let target   = e.target;
    let formData = {};

    for (let i = 0; i < target.length; i++) {
        let mealOptions = ['starter', 'main', 'dessert'];
        if (mealOptions.includes(target.elements[i].getAttribute('name'))) {
          formData[target.elements[i].getAttribute('id')] = target.elements[i].value;
        } else {
          formData[target.elements[i].getAttribute('name')] = target.elements[i].value;
        }
    }

    try {
      await fetcher('/api/update_rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).then((data)=>{
        console.log(data);
        setSuccessMsg(data.message)
        setSaving(false)
      })
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg([error.data.message])
      setSaving(false)
    }
  }


  return (
    <Layout>
      <Head>
        <title>My RSVP</title>
      </Head>
      <div className={`${styles.pageWrapper} container`}>
        <div className={styles.imageWrapper}>
          <Image src={WillamsonPark}/>
        </div>
        <div className={styles.formWrapper}>
          <Form errorMessages={errorMsg} successMessage={successMsg} onSubmit={handleSubmit} >
            <RSVPFormClosed loading={saving}/>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default SgProfile
