const test = require('tape')
const { PROCONAPI } = require('../index')
require('dotenv/config')

const Api = new PROCONAPI(process.env.API_TOKEN)

test('Should receive data when api is called', async (t) => {
  var response = await Api.GetComplaints(2019, 1)
  var hasKey = 'data' in response
  t.assert(hasKey)
  t.end()
})
