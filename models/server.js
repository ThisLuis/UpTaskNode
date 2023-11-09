const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../config/db');
require('../models/Projects');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      home: '/',
      projects: '/projects'
    }

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  connectDB() {
    db.sync()
      .then(() => console.log('Connect to db server'))
      .catch(error => console.log(error))
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.home, require('../routes/home.routes'));
    this.app.use(this.paths.projects, require('../routes/projects.routes'));
  }

  run() {
    this.app.listen(this.port, console.log(`Server up! at port: ${ this.port }`));
  }

}

module.exports = Server;