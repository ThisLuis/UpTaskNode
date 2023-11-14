// Global imports
const { response } = require('express');

// Models
const Projects = require('../models/Projects');

const slug = require('slug');


// Logic
const getForm = async(req, res) => {
  const projects = await Projects.findAll();
  res.render('createProject', {
    title: 'UpTask - Projects',
    projects,
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
    
    const project = await Projects.create({name});
    res.redirect('/')
      // .then( () => console.log('row was insert'))
      // .catch(err => console.log(err))
  }

}

const projectByUrl = async( req, res = response ) => {
  const project = await Projects.findOne({
    where: {
      url: req.params.url
    }
  });

  res.render('projectById', {
    project,
    title: 'Create Project'
  })

}

const projectEdit = async(req, res) => {
  const projects = await Projects.findAll();
  const project = await Projects.findOne({
    where: {
      id: req.params.id
    }
  });


  res.render('createProject', {
    namePage: 'Edit Project: ',
    projects,
    project
  })
}

// Exports
module.exports = {
  createProject,
  getForm,
  projectByUrl,
  projectEdit
};