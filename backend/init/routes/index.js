var express = require('express');
var router = express.Router();
var firebase = require("firebase");

/* GET home page. */
var db = firebase.database();
var ref = db.ref("users");

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  let sentBackArray = [];
  ref.once('value', snap => {
    snap.forEach((user) => {
      if(user.val().FBuser === req.params.id){
        for (var variable in user.val().groups) {
          sentBackArray.push(variable);
        }
        console.log(sentBackArray);
        res.send({data : sentBackArray})
      }
    });
  });
});

module.exports = router;
