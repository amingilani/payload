// Bills are payment requests addressed to specific buyers. Bill line items have fixed prices, typically denominated in fiat currency.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  "description": { // Line item description
    type: String,
    required: true
  },
  "price": { // Line item unit price, in `currency`
    type: Number,
    required: true
  },
  "quantity": { // Line item number of units
    type: Number,
    required: true
  }
}, {
  _id: false
});

var billSchema = new Schema({
  "id": String, // Resource id
  "token": String, // API token for bill resource
  "createdDate": Date, // Time of bill creation
  "delivered": Boolean, // Indicates whether bill has been delivered to buyer
  "number": String, // Bill identifier, specified by merchant
  "status": String, // Can be `draft`, `sent`, `paid`, or `complete`
  "currency": { // ISO 4217 3-character currency code
    type: String,
    required: true,
    default: "PKR" // default is PKR
  },
  "showRate": Boolean, //Indicates whether corresponding invoice web page should display equivalent fiat amount
  "archived": Boolean, // Indicates whether bill is visible in BitPay website
  "name": String, // Buyer Name
  "address1": String, // Buyer Street Address
  "address2": String, // Buyer Apartment or Suite Number
  "city": String, // Buyer Locality or City
  "state": String, // Buyer State or province
  "zip": String, // Buyer Zip or Postal Code
  "country": String, // Buyer Country code
  "email": String, // Buyer Email
  "phone": String, // Buyer Phone
  "dueDate": Date, // UTC date, ISO-8601 format yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ. Default is current time.
  "items": [itemSchema] // List of line items
});

var Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
