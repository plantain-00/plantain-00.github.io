var calendarBodyTemplate = require("./templates/calendar.min.handlebars");

var vue;

var vueModel = {
    el: "#vue-id",
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        minDay: new Date(2015, 5, 10).getTime(),
        maxDay: new Date(2015, 7, 12).getTime(),
        selectedDates: {
            "2015-07": [15, 16]
        },
        holidays: {
            "2015-06": [6, 7, 13, 14, 20, 21, 22, 27, 28],
            "2015-07": [4, 5, 11, 12, 18, 19, 25, 26],
            "2015-08": [1, 2, 8, 9, 15, 16, 22, 23, 29, 30]
        }
    },
    computed: {
        getMonth: {
            get: function () {
                return this.month + 1;
            }
        },
        getYearMonth: {
            get: function () {
                var tmp = this.getMonth;
                return this.year + "-" + (tmp < 10 ? "0" : "") + tmp;
            }
        },
        getSelectedDates: {
            get: function () {
                var result = [];

                for (var yearMonth in this.selectedDates) {
                    if (this.selectedDates.hasOwnProperty(yearMonth)
                        && this.selectedDates[yearMonth].length > 0) {
                        for (var i = 0; i < this.selectedDates[yearMonth].length; i++) {
                            var theDay = this.selectedDates[yearMonth][i];
                            result.push(yearMonth + "-" + (theDay < 10 ? "0" : "") + theDay);
                        }
                    }
                }

                return result;
            }
        }
    },
    methods: {
        getDates: function () {
            var maxDayOfMonth = new Date(this.year, this.month + 1, 0).getDate();
            var firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

            var selectedDaysOfMonth = this.selectedDates[this.getYearMonth];
            var holidaysOfMonth = this.holidays[this.getYearMonth];

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

                if ($.inArray(j, holidaysOfMonth) >= 0) {
                    tmp.push({
                        isVisible: true,
                        text: j,
                        isHoliday: true
                    });
                } else {
                    var status = {
                        isVisible: true,
                        text: j,
                        isHoliday: false
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

        if (!vue.$data.selectedDates[vue.getYearMonth]) {
            vue.$data.selectedDates[vue.getYearMonth] = [];
        }
        var selectedDaysOfMonth = vue.$data.selectedDates[vue.getYearMonth];

        var theDay = parseInt($(this).val());
        if (this.checked) {
            label.addClass("checked");
            selectedDaysOfMonth.push(theDay);
        } else {
            label.removeClass("checked");
            var index = $.inArray(theDay, selectedDaysOfMonth);
            selectedDaysOfMonth.splice(index, 1);
        }
        console.log(vue.getSelectedDates);
    });

    console.log(vue.getSelectedDates);
}

$(document).ready(function () {
    vue = new Vue(vueModel);

    vue.showCalendar();
});