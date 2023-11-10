const Sequelize = require ('sequelize');
const db = require('../config/db');
const shortid = require('shortid');

const slug = require('slug');

const Projects = db.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  url: Sequelize.STRING
},
  //* Hooks
  {
    hooks: {
      beforeCreate( project ) {
        const url = slug( String(project.name) ).toLowerCase();
        project.url = `${ url }-${ shortid.generate()}`;
      }
    }
  }
);

module.exports = Projects;