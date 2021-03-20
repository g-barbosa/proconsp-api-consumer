const axios = require('axios')

class PROCONAPI {

  constructor(uri, token) {
    this.uri = uri
    this.token = token
  }

  async GetComplaints ( year, limit, offset ) {
    axios.get(this.uri + year, {
      params: {
        limite: limit === undefined ? 20 : limit,
        offset: offset === undefined ? 1 : offset
      },
      headers: {
        'Authorization': this.token
      }
    })
    .then((data) => {
      console.log(data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  } 
}

module.exports = {
  PROCONAPI
}
