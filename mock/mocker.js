const delay = require('mocker-api/lib/delay')

const proxy = {
  'GET /api/user': {
    code: 0,
    data: {
      name: 'sunding',
      age: 27,
    },
  },

  'POST /api/user/list': {
    code: 0,
    data: [
      {
        id: 1,
        username: 'kenny',
        sex: 6,
      },
      {
        id: 2,
        username: 'kenny',
        sex: 6,
      },
    ],
  },

  'GET /api/:owner/:id': (req, res) => {
    const { owner, id } = req.params
    return res.json({
      code: 0,
      data: {
        id,
        owner,
        path: req.params[0],
      },
    })
  },

  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: 'sdfsdfsdfdsf',
        data: {
          id: 1,
          username: 'kenny',
          sex: 6,
        },
      })
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403,
      })
    }
  },
}

module.exports = delay(proxy, 1000)
