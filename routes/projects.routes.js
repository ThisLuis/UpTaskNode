const { Router } = require('express');

const { getForm, createProject, projectByUrl, projectEdit } = require('../controllers/projects.controller');

//* imports thirds
const  { check } = require('express-validator');


const router = Router();

router.get('/new-project', getForm);
router.post('/new-project', [
  check('name', 'name is required'),
  check('name').not().isEmpty(),
  check('name').trim().escape()
],createProject);

router.get('/:url', projectByUrl);
router.get('/edit/:id', projectEdit);
router.post('/new-project/:id', [
  check('name', 'name is required'),
  check('name').not().isEmpty(),
  check('name').trim().escape()
], projectEdit)

module.exports = router;