var express = require('express');
var router = express.Router();
var firebase = require("firebase");

/* GET home page. */
var db = firebase.database();
var ref = db.ref("users");

router.get('/', function(req, res, next) {
  console.log(req.params.id);
  ref.once('value', snap => {
    snap.forEach((user) => {
      if(user.val().FBuser === req.params.id){
        res.send({data : user.val().groups})
      }
    });
  });
});


module.exports = router;
