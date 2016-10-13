var express = require('express');
var router = express.Router();
var accountSid = 'AC24fc1bd8b43ec736c504a092dca3c054'; // Your Account SID from www.twilio.com/console
var authToken = 'aed26dc27a716f3552d5b9a6475c849a';   // Your Auth Token from www.twilio.com/console
var firebase = require("firebase");

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

var db = firebase.database();
var ref = db.ref("users");
var message = '';

function getGroup() {
  ref.once('value', snap => {
    snap.forEach((user) => {
      user.val().groups.forEach((group)=>{
        if(group.name === "Soccer"){
          sendMessage(group.numbers, message);
        }
      })
    });
  })
}

function sendMessage(groupNumberArray, message) {
  console.log(groupNumberArray);
  for (var i = 0; i < groupNumberArray.length; i++) {
    client.messages.create({
        body: `${message}`,
        to: `${groupNumberArray[i]}`,  // Text this number
        from: '+17209618767 ' // From a valid Twilio number
    }, function(err, message) {
        console.log(err, message);
    });

  }
}

/* GET users listing. */
router.get('/send/:message', function(req, res, next) {
  message = req.params.message;
  console.log(message);
  getGroup();
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

router.get('/test', function(req, res, next) {
  getGroup();

  res.send('respond with a resource');
});


module.exports = router;
