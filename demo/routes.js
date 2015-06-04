var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
var jwt = require('jsonwebtoken');
var hookSecret = process.env.WEBHOOK_SECRET;

/* sign-up */
router.get('/', function(req, res, next) {
  res.render('./demo/signup.ejs');
});

router.get('/checkout', function(req, res, next) {
  res.render('./demo/checkout.ejs');
});


module.exports.io = function(io) {
  io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
      console.log('user disconnected');
    });
  });
  router.post('/boom', function(req, res) {
    io.emit('boom', "lol");

    var token = jwt.sign({
      secret: "there is no secret" // lawlz
    }, hookSecret, {
      expiresInMinutes: 60 // expires in 60 minutes
    });

    var
      amount = req.body.amount,
      client = "Samandari Shoes",
      address = req.body.address;

    request.post(
      'http://paybot.payload.pk/payload/tx?token=' + token, {
        form: {
          "amount": amount,
          "client": client,
          "address": address
        }
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body);
        }
      }
    );

    res.send("boomed!");
  });
};

module.exports.app = function(app) {
  app.use('/demo', router);
};
