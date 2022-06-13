//Andres Felipe Cuero - 301203787

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  title: 'Home', h1:"Main heading"   });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {  title: 'Home'  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', {  title: 'About me'  });
});


/* GET Product page. */
router.get('/products', function(req, res, next) {
  res.render('projects', {  title: 'Projects'  });
});


/* GET Services  page. */
router.get('/services', function(req, res, next) {
  res.render('services', {  title: 'Services'  });
});


/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {  title: 'Contact'   });
});


module.exports = router;
