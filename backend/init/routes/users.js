var express = require('express');
var router = express.Router();
var accountSid = 'AC24fc1bd8b43ec736c504a092dca3c054'; // Your Account SID from www.twilio.com/console
var authToken = 'aed26dc27a716f3552d5b9a6475c849a';   // Your Auth Token from www.twilio.com/console
var firebase = require("firebase");

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

var db = firebase.database();
var ref = db.ref("users");

/* GET users listing. */
router.get('/send/:userId', function(req, res, next) {
  // console.log(req.params.userId);
  // console.log(req.params.groupId);
  // console.log(req.params.content);
  client.messages.create({
      body: 'https://www.youtube.com/watch?v=Aum817TH--U',
      to: '+13038425270',  // Text this number
      from: '+17209618767 ' // From a valid Twilio number
  }, function(err, message) {
      console.log(err, message);
  });
  res.send('respond with a resource');
});

router.get('/getgroups/:id', function(req, res, next) {
  console.log(req.params.id);
  ref.once('value', snap => {
    snap.forEach((user) => {
        console.log(user.val().FBuser);
      if(user.val().FBuser === req.params.id){
        res.send(user.val().groups)
      }
    });
  });
});


module.exports = router;
