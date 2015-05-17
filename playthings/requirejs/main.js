require.config({
    paths: {
        jquery: "./jquery-2.1.4.min",
        math: "./math"
    }
});

require(["math", "jquery"], function (math, $) {
    console.log(math.add(1, 2));
    $("body").html("<button>click it</button>");
});