var express = require('express');
var router = express.Router();

var screenshot = require('../scripts/screenshot-tools');

const captureScreenshot = async () => {
  fileName = "test.jpg";
  return screenshot(`./public/images/${fileName}`);
}

/* GET home page. */
router.get('/', async (req, res) => {
  await captureScreenshot();
  res.render('index', { title: 'Screenshot Web: To get the latest screenshot by clicking Recapture button.' });
});

router.get('/screenshot', async function (req, res) {
  fileName = await captureScreenshot();
  res.send(fileName)
});



module.exports = router;
