var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exRatesSchema = require('./exRates.js');

var bipPaymentUrl = new Schema({
  "bip70": String, //   URL for given BIP protocol
  "bip71": String,
  "bip72": String
}, {
  _id: false
});

var transactionSchema = new Schema({
  'amount': Number, // Amount paid, in satoshis
  'confirmations': Number, // Number of confirmations in blockchain
  'time': Date, // Time of transaction from bitcoin network
  'receivedTime': Date, // Time when BitPay received transaction from network
  'flags': Object, //Miscellaneous invoice attributes
  'refundable': Boolean // Indicates whether buyer bitcoin address is available for this invoice
}, {
  _id: false
});

var invoiceSchema = new Schema({

  'token': String, // API token for invoice resource
  'price': Number, // Fixed price amount, denominated in `currency`
  'currency': String, // Fixed price currency, not the expiring BTC price
  'orderId': String, // Order id
  'orderID': String, // Order id (deprecated)
  'itemDesc': String, // Invoice description, from first line item of bill
  'itemCode': String, // `bitcoindonation` for donations, otherwise null
  'notificationEmail': String, // Contact for notification of invoice status change. If missing, then account notification email address is notified.
  'notificationURL': String, // Webhook URL for instant payment notification (IPN)
  'redirectURL': String, // URL to redirect your shopper back to your website after a successful purchase
  'paymentUrls': [bipPaymentUrl], // All URLs where your shopper can pay the invoice. URLs are temporary and will change and not be available after 15 minutes when the invoice expires, unless the invoice has been paid
  'posData': String, // Order reference number from the point-of-sale (POS). It should be a unique identifer for each order that you submit. Field is a passthru-variable returned in the payment notification post, without any modifications, for you to match up the BitPay payment notification with the request that was sent to BitPay.
  'transactionSpeed': String, // Can be `high`, `medium`, or `low`. HIGH speed confirmations typically take 5-10 seconds, and can be used for digital goods or low-risk items. LOW speed confirmations take about 1 hour, and should be used for high-value items. If missing, then account transaction speed is used.
  'fullNotifications': Boolean, // Indicates whether email and IPN notifications should be sent for this invoice. If missing, then account notification settings are used.
  'physical': Boolean, // Indicates whether items are physical goods. Alternatives include digital goods and services.
  'buyer': {
    'name': String, // Buyer Name
    'address1': String, // Buyer Street Address
    'address2': String, // Buyer Apartment or Suite Number
    'locality': String, // Buyer Locality or City
    'region': String, // Buyer State or province
    'postalCode': String, // Buyer Zip or Postal Code
    'country': String, // Buyer Country code
    'email': String, // Buyer Email
    'phone': String, // Buyer Phone
  },
  'url': String, // Web address of invoice, expires at `expirationTime`
  'status': String, // Can be `new` (invoice has not yet been fully paid), `paid` (received payment but has not yet been fully confirmed), `confirmed` (confirmed based on the transaction speed settings), `complete` (confirmed by BitPay and credited to the ledger), `expired` (can no longer receive payments), and `invalid` (invoice has received payments but was invalid)
  'btcPrice': Number, // BTC equivalent of `price`, expires at `expirationTime`
  'btcDue': Number, // BTC amount due
  'btcPaid': Number, // BTC amount paid
  'invoiceTime': Number, // UNIX time of invoice creation, in milliseconds
  'expirationTime': Number, // UNIX time when invoice is last available to be paid, in milliseconds
  'currentTime': Date, // Time of API call
  'exceptionStatus': Boolean, // Can be `paidPartial`, `paidOver`, or false
  'rate': Number, // BTC exchange rate used for invoice, denominated in `currency`
  'exRates': [exRatesSchema],
  'transaction': [transactionSchema],
  'flags': Object


});

var Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
