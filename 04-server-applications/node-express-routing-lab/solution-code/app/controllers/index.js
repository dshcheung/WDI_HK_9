var express = require('express');
var router  = express.Router();

router.use('/candies', require('./candies'));

module.exports = router;
