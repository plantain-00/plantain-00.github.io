var calendarBodyTemplate = require("./templates/calendar.min.handlebars");

var vue;

var vueModel = {
    el: "#vue-id",
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        minDay: new Date(2015, 5, 6).getTime(),
        maxDay: new Date(2015, 7, 8).getTime(),
        selectedDates: {
            "2015-7": [15]
        }
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
            var maxDayOfMonth = new Date(this.year, this.month + 1, 0).getDate();
            var firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

            var selectedDaysOfMonth = this.selectedDates[this.year + "-" + this.getMonth];

            var result = [];

            var tmp = [];
            for (var i = 0; i < firstDayOfMonth; i++) {
                tmp.push({
                    isVisible: false
                });
            }

            for (var j = 1; j <= maxDayOfMonth; j++) {
                if (tmp.length == 7) {
                    result.push(tmp);
                    tmp = [];
                }

                var dayOfWeek = (firstDayOfMonth + j - 1) % 7;
                if (dayOfWeek == 0 || dayOfWeek == 6) {
                    tmp.push({
                        isVisible: true,
                        text: j,
                        isWeekend: true
                    });
                } else {
                    var status = {
                        isVisible: true,
                        text: j,
                        isWeekend: false
                    };

                    var theDay = new Date(this.year, this.month, j).getTime();

                    if (theDay < this.minDay || theDay > this.maxDay) {
                        status.isOutOfRange = true;
                    } else {
                        status.isOutOfRange = false;

                        status.isChecked = selectedDaysOfMonth && selectedDaysOfMonth.length > 0 && $.inArray(j, selectedDaysOfMonth) > -1;
                    }

                    tmp.push(status);
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
            $("#calendar").html(calendarBodyTemplate({
                    dates: this.getDates(),
                    canShowPreviousMonth: new Date(this.year, this.month, 1) > this.minDay,
                    canShowNextMonth: new Date(this.year, this.month + 1, 0) < this.maxDay
                }
            ));

            rebind();
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
};

function rebind() {
    var tmp = vueModel;
    vue.$destroy();
    vueModel = tmp;
    vue = new Vue(vueModel);

    $(".the-label > input[type=checkbox]").change(function () {
        var label = $(this).parent();
        if (this.checked) {
            label.addClass("checked");
        } else {
            label.removeClass("checked");
        }
    });
}

$(document).ready(function () {
    vue = new Vue(vueModel);

    vue.showCalendar();
});