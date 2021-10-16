import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className='h-100'>
    <Head>
      <title>Ben Hogben and Annelise Johnson Wedding RSVP</title>
    </Head>
    <Header />
    <main>
      <div>{children}</div>
    </main>
    <Footer />
  </div>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
