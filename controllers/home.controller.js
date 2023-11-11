
const Projects = require('../models/Projects');

const home = async(req, res) => {
  const projects = await Projects.findAll();
  res.render('index', {
    title: 'UpTask: Projects',
    projects
  })
}

const our = (req, res ) => {
  res.send('our');
}

const createProject = (req, res) => {
  res.render('index', {
    title: 'UpTask: Projects'
  })
}

module.exports = {
  home,
  our,
  createProject
};