const axios = require('axios')

class PROCONAPI {

  constructor(uri, token) {
    this.uri = uri
    this.headers = { 'Authorization': `Bearer ${token}` }
  }

  async GetComplaints ( year, limit, offset ) {
    var complaints = await axios.get(this.uri + year, {
      params: {
        limite: limit === undefined ? 20 : limit,
        offset: offset === undefined ? 1 : offset
      },
      headers: this.headers
    })

    return complaints.data
  } 
}

module.exports = {
  PROCONAPI
}
