
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});

/* GET Naga page. */
router.get('/naga', function(req, res, next) {
  res.render('naga', { title: 'Naga' });
});

/* GET Sowji page. */
router.get('/sowji', function(req, res, next) {
  res.render('sowji', { title: 'Sowji' });
});

/* GET Kala page. */
router.get('/kala', function(req, res, next) {
  res.render('kala', { title: 'Kala' });
});

/* GET Rao page. */
router.get('/rao', function(req, res, next) {
  res.render('rao', { title: 'Rao' });
});

module.exports = router;
