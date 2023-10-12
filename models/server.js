const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      home: '/',
    }

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.paths.home, require('../routes/home.routes'));
  }

  run() {
    this.app.listen(this.port, console.log(`Server up! at port: ${ this.port }`));
  }

}

module.exports = Server;