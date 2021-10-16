import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const url = `${process.env.USER_DB}/api/login`

  try {
    // we check that the user exists and store some data in session
    const response = await fetchJson(
      url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(await req.body)
      }
    )
    if (response.success) {
      const user = { isLoggedIn: true };
      req.session.set('user', user);
      req.session.set('authToken', response.token);
      await req.session.save();
      res.status(200);
      res.json(user);
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
