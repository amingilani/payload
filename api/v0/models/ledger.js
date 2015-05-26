var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exRatesSchema = require('./exRates.js');
var ledgerSchema = new Schema({
  'code' : Number, // Ledger entry code
  'txType' : String, // English equivalent of ledger entry code
  'sourceType' : String, // Can be `invoice` or `bitcoinTx`
  'amount' : Number, // Ledger entry amount
  'timestamp' : Date, // Ledger entry timestamp
  'description' : String, // Ledger entry description
  'scale' : Number, // Power of 10 used for conversion
  'invoiceId' : String, // Invoice identifier
  'invoiceAmount' :	Number, // Invoice amount
  'invoiceCurrency' : String, // Invoice currency code
  'exRates' :	[exRatesSchema] // All exchange rates used for invoice
});

var Ledger = mongoose.model("Ledger", ledgerSchema);
module.exports = Ledger;
