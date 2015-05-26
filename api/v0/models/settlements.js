var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var settlementSchema = new Schema({
	'amount' : Number, // Settlement amount, in `currency`
	'currency' : String, // `BTC` or ISO 4217 3-character currency code
	'status' : String, // Can be `processing`, `completed`, or `failed`
	'dateCreated' : Date, // UTC date, ISO-8601 format yyyy-mm-ddThh:mm:ssZ. Indicates date when settlement was created.
	'dateExecuted' : Date, // UTC date, ISO-8601 format yyyy-mm-ddThh:mm:ssZ. Indicates date when settlement was executed. This is the time when ledger entries were written.
	'dateCompleted' : Date // UTC date, ISO-8601 format yyyy-mm-ddThh:mm:ssZ. Indicates date when settlement was completed. Present for `completed` and `failed` settlements only.

});

var Settlement= mongoose.model("Settlement", settlementSchema);
module.exports = Settlement;
