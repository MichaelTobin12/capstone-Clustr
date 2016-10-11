var express = require('express');
var router = express.Router();
var firebase = require("firebase");

/* GET home page. */
var db = firebase.database();
var ref = db.ref("users");
var uid = '0';
var customToken = firebase.auth().createCustomToken(uid);

router.get('/:firstName/:lastName/:phoneNumber', function(req, res, next) {
  console.log('dat sayn');
  console.log(req.params.firstName);
  
  var number = req.params.phoneNumber;
  var last_name = req.params.last_name;
  var first_name = req.params.firstName;
  ref.set({
    name : {
      first_name: `${req.params.firstName}`,
      last_name: `${req.params.lastName}`
    }
  });
  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
  });
  res.render('index', { title: 'lol' });
});

module.exports = router;
