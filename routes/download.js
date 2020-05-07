var express = require('express');
var router = express.Router();
var controller = require('../controller/download');

/* GET users listing. */
router.get('/', controller.test);

module.exports = router;
