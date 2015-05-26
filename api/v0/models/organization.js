var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var owerSchema = new Schema({
  'givenName': String, // First name of owner
  'familyName': String, // Last name of owner
}, {_id : false});

var payoutInfoSchema = new Schema({
  'label': String, // Label of address or account
  'currency': String, // `BTC` or ISO 4217 3-character currency code
  'percent': Number, // Percentage of net payment
  'bitcoinAddress': String, // Bitcoin address
  'name': String, // Name on account
  'taxId': String, // Tax id of bank account
  'routing': String, // Bank routing number
  'account': String, // Bank account number
  'iban': String, // IBAN account number
  'swift': String, // SWIFT bank number
  'sort': String, // Bank sort code
}, {_id : false});




var organizationSchema = new Schema({

  'numericId': String, // Organization id
  'affiliateOid': String, // Affiliate organization id
  'completedSetup': Boolean, // Indicates whether organization has completed account setup
  'name': String, // Business name
  'address1': String, // Street Address
  'address2': String, // Apartment or suite number
  'locality': String, // City or locality
  'region': String, // State or province
  'postalCode': String, // ZIP or postal code
  'country': String, // ISO 3166-1 alpha-2 country code
  'website': String, // Website for customers
  'phone': String, // Support phone contact
  'email': String, // Support email contact
  'legalBusinessName': String, // Legal business name
  'industryCode': String, // Industry code
  'isNonProfit': Boolean, // US non-profit status
  'taxId': String, // US tax id
  'owners': [owerSchema], // Business owners
  'payoutInfo': [payoutInfoSchema], // Identifiers of all bitcoin addresses and bank accounts where BitPay settles your net payment. Identifiers vary by currency.

});

var Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
