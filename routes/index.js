var express = require('express');
var router = express.Router();

var screenshot = require('../scripts/screenshot-tools');

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index', { title: 'Screenshot Web: To get the latest screenshot by clicking Recapture button.' });
});

router.get('/screenshot', async function(req, res) {
  fileName = "test.jpg";
  await screenshot(`./public/images/${fileName}`);
  res.send(fileName)
});
module.exports = router;
