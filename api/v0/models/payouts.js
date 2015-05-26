var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var instructionSchema = new Schema({
  'status': String, // Can be `unpaid`
  'btc': Object, // BTC payment summary
  'transactions': Array, // Transactions
  'amount': Number, // BTC amount
  'address': String, // Bitcoin address
  'label': String // Label
});

var payoutSchema = new Schema({
  'token': String, // API token for payout request resource
  'account': String, // Merchant account id
  'status': String, // Can be `new`, `funded`, `processing`, `complete`, `failed`, and `cancelled`
  'btc': Number, // BTC equivalent amount
  'requestDate': Date, // Date when request was submitted
  'instructions': [instructionSchema], // Payout instructions
  'amount': Number, // Fiat or BTC amount
  'currency': String, // Payout currency
  'effectiveDate': Date, // Date when request is effective
  'reference': String, // Merchant-provided data
  'pricingMethod': String, // Can be `manual_2` or `vwap_24hr`
  'notificationEmail': String, // IPN email address
  'notificationURL': String, // IPN webhooks URL
});

var Payout = mongoose.model("Payout", payoutSchema);
module.exports = Payout;
