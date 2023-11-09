const { response } = require('express');

const Projects = require('../models/Projects');

const getForm = (req, res) => {
  res.render('createProject', {

  })
}

const createProject = async(req, res = response) => {
  
  const { name } = req.body;

  let errors = [];

  if( !name ) {
    errors.push({'message': 'Add new name to project0'})
  }

  if( errors.length > 0 ) {
    res.render('createProject', {
      title: 'New Project',
      errors
    })
  } else {
    const project = await Projects.create({ name });
    res.redirect('/')
      // .then( () => console.log('row was insert'))
      // .catch(err => console.log(err))
  }

}

module.exports = {
  createProject,
  getForm
};