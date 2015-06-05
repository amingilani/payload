var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
var jwt = require('jsonwebtoken');
var hookSecret = process.env.WEBHOOK_SECRET;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'mailgun',
  auth: {
    user: process.env.MG_USER,
    pass: process.env.MG_PASS
  }
});

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

    transporter.sendMail({
      from: 'paybot@letter.payload.pk',
      to: 'aminshahgilani+demo@gmail.com',
      subject: 'New Order',
      text: 'Hello Samandar Khan\n' + "You've recieved a new order for" +
      "Jimmy Choo Knockoffs worth 1000 PKR. I've credited your account.\n" +
      "-Paybot"
    });

    res.send("boomed!");
  });
};

module.exports.app = function(app) {
  app.use('/demo', router);
};
