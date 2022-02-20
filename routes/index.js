var express = require('express');
var router = express.Router();

var screenshot = require('../scripts/screenshot-tools');

/* GET home page. */
router.get('/', async function(req, res, next) {
  await screenshot("./public/images/test.jpg");
  res.render('index', { title: 'Screenshot' });
});

module.exports = router;
