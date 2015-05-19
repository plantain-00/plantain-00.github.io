var math = require("./math");
var userListTemplate = require("../templates/users.handlebars");

$("#testImg").attr("src", require('../images/test.png'));

document.write(math.add(1, 3));

var userList = [{
    name: "John",
    age: 12,
    gender: true
}, {
    name: "Tom",
    age: 23,
    gender: false
}];

$("#userList").html(userListTemplate(userList));