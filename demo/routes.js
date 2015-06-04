var express = require('express');
var router = express.Router();
var passport = require('passport');


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
    res.send("boomed!");
  });
};

module.exports.app = function(app) {
  app.use('/demo', router);
};
