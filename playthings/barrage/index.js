var data = [];
var player;
var currentTop = 0;

var vue = new Vue({
    el: "#vue",
    data: {
        width: 640,
        height: 264,
        barrages: [],
        text: "test"
    },
    methods: {
        add: function () {
            data.push({
                text: this.text,
                color: "red",
                totalSeconds: 15,
                startSeconds: player.currentTime()
            });
        }
    }
});

function getTop() {
    if (currentTop > vue.height) {
        currentTop = 15;
    } else {
        currentTop += 15;
    }

    return currentTop;
}

data.push({
    text: "test1",
    color: "red",
    totalSeconds: 15,
    startSeconds: 0
});
data.push({
    text: "test2",
    color: "green",
    totalSeconds: 10,
    startSeconds: 3
});
data.push({
    text: "test3",
    color: "yellow",
    totalSeconds: 12,
    startSeconds: 1.5
});

player = videojs("the-video", {}, function () {
    this.play();

    this.on("timeupdate", function () {
        var current = this.currentTime();
        vue.barrages = data.filter(function (d) {
            return current > d.startSeconds && current < d.startSeconds + d.totalSeconds;
        }).map(function (d) {
            if (!d.top) {
                d.top = getTop();
            }
            return {
                text: d.text,
                style: {
                    color: d.color,
                    left: (vue.width * (current - d.startSeconds) / d.totalSeconds) + "px",
                    top: d.top + "px"
                }
            };
        });
    });
});