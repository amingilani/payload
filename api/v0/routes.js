var express = require('express');
var router = express.Router();
var logger = require('./config/logger.js');
var mongoose = require('mongoose');

/**** Bills. *****/
var Bill = require('./models/bill.js');

// GET a list of all the bills for the caller
router.get('/bills', function(req, res) {

  // TODO mongodb query

});


// POST a new bill
router.post('/bills', function(req, res) {


  if (!req.body.description && !req.body.price && !req.body.quantity) {
    // If not all requirements

    // log the error
    logger.info("Error 412: POST api/bills", {
      'path': req.path,
      'status': 412,
      'message': "'description', 'price', and 'quantity' are required.",
      'client-ip': req.ip
    });

    // reply with an error
    res.json({
      'success': false,
      'status': 412,
      'message': "Error: 'description', 'price', and 'quantity' are required."
    });

  } else {

    // save the bill in db
    var bill = new Bill(req.body);
    bill.save(function(err, bill) {

      // if error, reply with a 500
      if (err) {
        logger.error(err);
        res.json({
          success: false,
          status: 500,
          message: "Internal server error"
        });
      }

      if (bill) {
        logger.info("201: Saved new bill " + bill.id, {
          "bill": bill.id,
          "client-ip": req.ip
        });
        res.json({
          success: true,
          status: 201,
          Message: "Success",
          "billId": bill.id
        });
      }
    });
  }
});

// GET all the bills
router.get('/bills/', function(req, res) {

  //TODO get all the bills for the caller

});

// GET a specific bill
router.get('/bills/:billId', function(req, res) {
  var billId = req.params.billId;
  Bill.findOne({
    "_id": billId
  }, function(err, bill) {

    // if an internal error happens
    if (err) {
      logger.error(err);
      res.json({
        success: false,
        status: 500,
        message: "Internal server error"
      });
    }

    // if there is no such bill
    if (!bill) {
      logger.info("Error 404: GET api/bills/:billId", {
        'path': req.path,
        'status': 404,
        'message': "No such record",
        'client-ip': req.ip
      });

      // reply with an error
      res.json({
        'success': false,
        'status': 404,
        'message': "No such record"
      });

    }

    // if a bill is found
    if (bill) {
      res.json({
        success: true,
        status: 200,
        "bill": bill
      });
      logger.info("200: requested Bill",{
        "bill": bill.id,
        "client-ip": req.ip
      });
    }
  });
});

// PUT (update) a specific bill
router.put('/bills/:billId', function(req, res) {
  var billId = req.params.billId;
  // TODO query to update specific document
});


// Deliver the bill
router.post('/bills/:billId/deliveries', function(req, res) {
  var billId = req.params.billId;
  // TODO deliver the bill to the intended receipient
});


module.exports = function(app, passport) {
  app.use('/api/v0/', router);
};
