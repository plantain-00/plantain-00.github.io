var math = require("./math");
document.write(math.add(1, 3));

$.get("./templates/users.handlebars", {}, function (template) {
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
});