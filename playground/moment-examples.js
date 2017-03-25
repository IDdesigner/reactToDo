var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0

var now = moment();
console.log('Current time stamp: ', now.unix());

var timestamp = 1490406890;
var currentMoment = moment.unix(timestamp);
console.log('current moment: ', currentMoment.format("MMMM Do, YYYY @ h:mm A"));