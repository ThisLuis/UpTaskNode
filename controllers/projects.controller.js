const { response } = require('express');

const getForm = (req, res) => {
  res.render('createProject', {

  })
}

const createProject = (req, res = response) => {
  
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
  }

}

module.exports = {
  createProject,
  getForm
};