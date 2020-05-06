const pdf = require('html-pdf');
var express = require('express');
let jade = require('jade');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    
  const data = jade.renderFile('./views/index.jade', {
    title: 'Invoice',
    title2: 'Jungle',
  });

  pdf.create(data).toFile('./invoice.pdf', function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });

  res.send('Holis PDF');
});

module.exports = router;
