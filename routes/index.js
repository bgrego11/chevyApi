var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SA Music' });

});

router.get('/songs', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/list.html'));

});

module.exports = router;

