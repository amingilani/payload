var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionsSchema = new Schema({
	'token' : String, // API token for subscription resource
	'billData' : Object, // See `bills` resource
	'schedule' : String, // Schedule of repeat bill due dates. Can be `weekly`, `monthly`, `quarterly`, `yearly`, or a simple cron expression specifying seconds, minutes, hours, day of month, month, and day of week. BitPay maintains the difference between the due date and the delivery date in all subsequent, automatically-generated bills.
	'status' : String, // Can be `draft` or `active` or `cancelled`. Subscriptions in active state will create new Bills on the nextDelivery date.
	'nextDelivery' : Date // UTC date, ISO-8601 format yyyy-mm-dd or yyyy-mm-ddThh:mm:ssZ. Default is current time. Current or past date indicates that the bill can be delivered immediately. BitPay may modify the hh:mm:ss values in order to distribute deliveries evenly throughout the day.
});

var Subscription = mongoose.model("Subscription", subscriptionsSchema);
module.exports = Subscription;
