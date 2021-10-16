import withSession from '../../lib/session'
import fetchJson from '../../lib/fetchJson'

export default withSession(async (req, res) => {
  const user = req.session.get('user')
  const authToken = req.session.get('authToken')
  const url = `${process.env.USER_DB}/api/get_user`

  if (user && authToken) {
    const userDetails = await fetchJson(
      url,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(req.body)
      }
    )
    if (userDetails.status !== 200 && 
      typeof(userDetails.status) !== 'string'
    ) {
      req.session.set('userDetails', userDetails)
      res.json({
        isLoggedIn: true,
        ...user,
        details: userDetails,
      })
    } else {
      req.session.destroy()
      res.json({ isLoggedIn: false })
    }
  } else {
    res.json({
      isLoggedIn: false,
    })
  }
})
