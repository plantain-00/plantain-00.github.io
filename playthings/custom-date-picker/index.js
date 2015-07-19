var calendarBodyTemplate = require("./templates/calendar-body.handlebars");

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var lastDayOfMonth = new Date(year, month, 0);
console.log(lastDayOfMonth.getDate());
for (var i = 1; i <= lastDayOfMonth; i++) {

}