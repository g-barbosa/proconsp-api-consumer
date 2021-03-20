const test = require('tape')
const { PROCONAPI } = require('../index')
require('dotenv/config')

const uri = 'https://gateway.apilib.prefeitura.sp.gov.br/smj/proconsp/v1/'
const Api = new PROCONAPI(uri, process.env.API_TOKEN)
console.log(process.env.API_TOKEN)
test('Should receive data when api is called', async (t) => {
  var response = await Api.GetComplaints(2019, 1)
  var hasKey = 'data' in response
  t.assert(hasKey)
  t.end()
})
