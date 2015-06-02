// models/user.js
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model

var apiSchema = mongoose.Schema({
  apiKey: String,
  scope: { // 1 for merchance, 2 for POS
    type: Number,
    required: true,
    default: 1
  },
  enabled: {
    type: Boolean,
    required: true,
    default: false
  }

}, {
  _id: false
});

var userSchema = mongoose.Schema({

  local: {
    username: String,
    email: String,
    password: String,
  },
  apiKeys: [apiSchema]

});

// methods
// =======

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model('User', userSchema);
