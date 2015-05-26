var express = require('express');
var router = express.Router();

/* Bills. */
router.get('/bills', function(req, res, next) {
  if (!req.body.description && req.body.price && req.body.quantity) {
    var missing = [];
    var message = 'missing parameters: ';

    if (!req.body.description) missing.push("'description'");
    if (!req.body.price) message += missing.push("'price'");
    if (!req.body.quantity) message += missing.push("'quantity'");

    switch (missing.length) {
      case 1:
        message += missing[0] + ".";
        break;
      case 2:
        message += missing[0] + ", and" + missing[1] + ".";
        break;
      default:
        message += missing[0] + ", " + missing[1] + ", and" + missing[2] + ".";
    }

    res.json({
      'success' : false,
      'message' : message
    });

  }
});


module.exports = function(app, passport) {
  app.use('/api/v0/', router);
};
