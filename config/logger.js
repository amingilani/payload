var winston = require('winston');
winston.emitErrs = true;
var config = require('./config.js');
var dbURL = config.db.url();
require('winston-pushbullet').Pushbullet;
require('winston-mongodb').MongoDB;

var logger = new winston.Logger({
  levels: {
    error: 4,
    warn: 3,
    info: 2,
    debug: 1,
    trace: 0,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'blue',
    debug: 'green',
    trace: 'white',
  },
  transports: [
    new winston.transports.MongoDB({

      level: 'info',
      silent: false,
      db: dbURL,
      options: {
        db: config.db.url,
        server: {
          poolSize: 2,
          socketOptions: {
            autoReconnect: true
          }
        }
      },
      collection: 'logs',
      storeHost: false,
      username: config.db.user,
      password: config.db.pass,
      label: "",
      name: "",
      capped: true,
      cappedSize: 10000000 //10MB

    }),
    new winston.transports.Pushbullet({

      apikey: config.pushbullet.apiKey,
      level: 'error',
      title: 'Payload Error',
      devices: '' // notify all devices

    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })

  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};


module.exports = logger;
