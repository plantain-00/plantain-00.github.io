var calendarBodyTemplate = require("./templates/calendar-body.min.handlebars");

var vue = new Vue({
    el: "#vue-id",
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    },
    computed: {
        getMonth: {
            get: function () {
                return this.month + 1;
            }
        }
    },
    methods: {
        getDates: function () {
            var maxDay = new Date(this.year, this.month + 1, 0).getDate();
            var firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

            var result = [];

            var tmp = [];
            for (var i = 0; i < firstDayOfMonth; i++) {
                tmp.push({
                    isVisible: false
                });
            }

            for (var j = 1; j <= maxDay; j++) {
                if (tmp.length == 7) {
                    result.push(tmp);
                    tmp = [];
                }

                var dayOfWeek = (firstDayOfMonth + j - 1) % 7;
                if (dayOfWeek > 0 && dayOfWeek < 6) {
                    tmp.push({
                        isVisible: true,
                        text: j,
                        isWeekend: false
                    });
                } else {
                    tmp.push({
                        isVisible: true,
                        text: j,
                        isWeekend: true
                    });
                }
            }

            while (tmp.length < 7) {
                tmp.push({
                    isVisible: false
                });
            }

            result.push(tmp);

            return result;
        },
        showCalendar: function () {
            $("#calendar-body").html(calendarBodyTemplate({
                dates: this.getDates()
            }));
        },
        showPreviousMonth: function () {
            var nextMonth = new Date(this.year, this.month - 1, 1);
            this.year = nextMonth.getFullYear();
            this.month = nextMonth.getMonth();

            this.showCalendar();
        },
        showNextMonth: function () {
            var nextMonth = new Date(this.year, this.month + 1, 1);
            this.year = nextMonth.getFullYear();
            this.month = nextMonth.getMonth();

            this.showCalendar();
        }
    }
});

$(document).ready(function () {
    vue.showCalendar();
});