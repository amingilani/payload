var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var payoutSchema = new Schema({
  'code' : String, // ISO 4217 3-character currency code
  'name' : String, // English currency name
  'rate' : Number // Currency units per BTC
});

var Rate = mongoose.model("Rate", rateSchema);
module.exports = Rate;
