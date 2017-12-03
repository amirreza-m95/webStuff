var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploads = multer({dest:'./uploads'});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register' , {title:'register'});
});

router.get('/login', function(req, res, next) {
  res.render('login' , {title:'login'});
});

router.post('/register', uploads.single('profileimage') , function(req, res, next) {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  var name = req.body.name;

  if(req.file)
    var profileimage = req.body.file.name;
  else {
    console.log('there is no photo');
    var profileimage = 'noimage.jpg';
  }

  //validator
  req.checkBody('name','name is required').notEmpty();
  req.checkBody('email','email is required').notEmpty();
  req.checkBody('email','email is not true').isEmail();
  req.checkBody('password','password is required').notEmpty();
  req.checkBody('username','username is required').notEmpty();
  req.checkBody('password2','passwords not match').equals(req.body.password);
  req.checkBody('name','name is required').notEmpty();


  var errors = req.validationErrors();
  if(errors){
    console.log(errors);
    res.render('register' , {
      errors: errors
    });
  } else {
    console.log('no error');
  }


});
module.exports = router;
