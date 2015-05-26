var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
  'pairingCode': String, // Access approval code
  'facade': String, // Can be `merchant`, or `pos`
  'label': String // Token label, may include spaces, underscores, and dashes

});

var Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
