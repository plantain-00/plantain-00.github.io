var template = require("../templates/index.handlebars");
var data = require("../data.json");

$("body").prepend(template(data));

var body = $("html,body");

var width = 160;
var height = 120;

var ratio = height / width;

$(function () {
    $(".anchor").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var top = $($(this).attr("href")).offset().top - 70;
        body.animate({
            scrollTop: top
        }, 500);
    });

    $(".nav-1").hover(function () {
        var ul = $(this).children("ul");
        if (ul != undefined) {
            ul.css("display", "block").css("opacity", 0)
                .stop(true)
                .animate({
                    opacity: 1
                }, {
                    duration: 500
                });
        }
    }, function () {
        var ul = $(this).children("ul");
        if (ul != undefined) {
            ul.stop(true)
                .animate({
                    opacity: 0
                }, {
                    duration: 500,
                    complete: function () {
                        ul.css("display", "none");
                    }
                });
        }
    });

    $("article section ul li a").hover(function (e) {
        var isTopRightCorner = ratio * (e.pageX - $(this).offset().left) + $(this).offset().top > e.pageY;
        var isTopLeftCorner = $(this).offset().top - ratio * (e.pageX - $(this).offset().left - width) > e.pageY;

        var cover = $(this).children("div");

        if (isTopRightCorner && isTopLeftCorner) {//from top
            cover.css("top", "0").css("left", "0").css("height", "0").css("width", width + "px");
            cover.stop(true).animate({
                "height": height + "px"
            }, 200);
        } else if (isTopLeftCorner) {//from left
            cover.css("top", "0").css("left", "0").css("height", height + "px").css("width", "0");
            cover.stop(true).animate({
                "width": width + "px"
            }, 200);
        } else if (isTopRightCorner) {// from right
            cover.css("top", "0").css("left", width + "px").css("height", height + "px").css("width", "0");
            cover.stop(true).animate({
                "left": "0",
                "width": width + "px"
            }, 200);
        } else {//from bottom
            cover.css("top", height + "px").css("left", "0").css("height", "0").css("width", width + "px");
            cover.stop(true).animate({
                "top": "0",
                "height": height + "px"
            }, 200);
        }
        $(this).children("span").stop(true).animate({
            "font-size": "18px",
            "padding-left": "5px",
            "padding-right": "5px"
        }, 200);
    }, function (e) {
        var isTopRightCorner = ratio * (e.pageX - $(this).offset().left) + $(this).offset().top > e.pageY;
        var isTopLeftCorner = $(this).offset().top - ratio * (e.pageX - $(this).offset().left - width) > e.pageY;

        var cover = $(this).children("div");

        if (isTopRightCorner && isTopLeftCorner) {//from top
            cover.stop(true).animate({
                "top": "0",
                "height": "0"
            }, 200);
        } else if (isTopLeftCorner) {//from left
            cover.stop(true).animate({
                "left": "0",
                "width": "0"
            }, 200);
        } else if (isTopRightCorner) {// from right
            cover.stop(true).animate({
                "left": width + "px",
                "width": "0"
            }, 200);
        } else {//from bottom
            cover.stop(true).animate({
                "top": height + "px",
                "height": "0"
            }, 200);
        }
        $(this).children("span").stop(true).animate({
            fontSize: "16px",
            "padding-left": "15px",
            "padding-right": "15px"
        }, 200);
    });
});