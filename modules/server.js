const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    this.middlewares();
    this.routes();
  }

  middlewares() {

    // CORS
    this.app.use(cors());

    // Read and parse
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    });
  }
}

module.exports = Server;
