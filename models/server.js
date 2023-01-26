const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    // Midelewares
    this.midelewares()

    // Routes
    this.routes()
  }

  midelewares () {
    // CORS
    this.app.use(cors())

    // Read and parse body
    this.app.use(express.json())

    // Public directory
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use(this.usersPath, require('../routes/users'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('Server running on port ', process.env.PORT)
    })
  }
}

module.exports = Server
