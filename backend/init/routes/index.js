var express = require('express');
var router = express.Router();
var firebase = require("firebase");

/* GET home page. */
var db = firebase.database();
var ref = db.ref("users");

router.get('/', function(req, res, next) {
  res.render()
});

module.exports = router;
