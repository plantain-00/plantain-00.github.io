var math = require("./math");
var template = require("../templates/users.handlebars");

document.write(math.add(1, 3));

var userListTemplate = Handlebars.compile(template);

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