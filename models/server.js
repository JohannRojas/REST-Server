const express = require('express')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Midelewares
    this.midelewares();

    //Routes
    this.routes();
  }

  midelewares() {
    //Public directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'get API'
      });
    })
    this.app.put('/api', (req, res) => {
      res.json({
        msg: 'put API'
      });
    })
    this.app.post('/api', (req, res) => {
      res.json({
        msg: 'post API'
      });
    })
    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'delete API'
      });
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port ', process.env.PORT);
    })
  }
}

module.exports = Server;