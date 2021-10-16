import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import WhenWhere from './parts/WhenWhere'
import PlacesToStay from './parts/PlacesToStay'
import Details from './parts/Details'
import DayInfo from './parts/DayInfo'
import Loading from '../components/Loading'

const SgProfile = () => {
  const { user } = useUser({ redirectTo: '/' })

  if (!user || user.isLoggedIn === false) {
    return (
      <Layout>
        <Loading/>
      </Layout>
    )
  }

  return (
    <Layout>
      <Details id='details'/>
      <WhenWhere id='when-where'/>
      <DayInfo id='day-info' />
      <PlacesToStay id='places-to-stay'/>
    </Layout>
  )
}

export default SgProfile
