var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencySchema = new Schema({
	"code" : String, // ISO 4217 3-character currency code
	"symbol" : String, // Display symbol
	"precision" : Number, // Number, of decimal places
	"exchangePctFee" : Number, // Basis points
	"payoutEnabled" : Boolean, // Indicates whether BitPay can exchange currency for BTC
	"name" : String, // English currency name
	"plural" : String, // English plural form
	"alts" : String, // Alternative currency name(s)
	"minimum" : String, // Minimum supported value
	"payoutFields" : Array // Can be `merchantEIN`

});

var Currency = mongoose.model("Currency", currencySchema);
module.exports = Currency;
