var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  "label": String, // Description of client
  "approved": Boolean, // Indicates whether client is approved
  "disabled": Boolean, // Indicates whether client is enabled
  "token": String // API token for clients resource
});

var Client = mongoose.model("Client", clientSchema);
module.exports = Client;
