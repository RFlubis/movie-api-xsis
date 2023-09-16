let express = require('express');
let router = express.Router();
const users = require('./users');
const movie = require('./movie');

router.use('/users', users);
router.use('/movie', movie);

module.exports = router;
