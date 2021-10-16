import withSession from '../../lib/session'
import fetchJson from '../../lib/fetchJson'

export default withSession(async (req, res) => {
  const url = `${process.env.USER_DB}/api/update_rsvp`
  const authToken = req.session.get('authToken')

  try {
    // we check that the user exists and store some data in session
    const response = await fetchJson(
      url,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(await req.body)
      }
    )
    if (response.success) {
      const user = { isLoggedIn: true };
      let data = [];
      return res.status(response.status || 200).json({message: response.message});
    } else {
      const error = new Error();
      let data = [];
      response.message.forEach(message => {
        data.push({
          message: message
        });
      });
      error.data = data;
      throw error;
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    let data = error.data;
    if (typeof error.data.message === 'string') {
      data.message = [error.data.message];
    }
    res.status(fetchResponse?.status || 500).json(data);
    // res.status(fetchResponse?.status || 500).json(JSON.stringify((typeof error.data !== 'array') ? Array(error.data) : error.data));
  }
})
