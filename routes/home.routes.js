const { Router } = require('express');

const { home, our } = require('../controllers/home.controller');

const router = Router();

router.get('/', home);
router.get('/our', our);


module.exports = router;