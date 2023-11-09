const { Router } = require('express');

const { getForm, createProject } = require('../controllers/projects.controller');


const router = Router();

router.get('/new-project', getForm)
router.post('/new-project', createProject)

module.exports = router;