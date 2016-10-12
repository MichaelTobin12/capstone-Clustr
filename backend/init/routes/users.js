var express = require('express');
var router = express.Router();
var accountSid = 'AC24fc1bd8b43ec736c504a092dca3c054'; // Your Account SID from www.twilio.com/console
var authToken = 'aed26dc27a716f3552d5b9a6475c849a';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.params.id);
  client.messages.create({
      body: 'https://www.youtube.com/watch?v=Aum817TH--U',
      to: '+13038425270',  // Text this number
      from: '+17209618767 ' // From a valid Twilio number
  }, function(err, message) {
      console.log(err, message);
  });
  res.send('respond with a resource');
});

module.exports = router;
