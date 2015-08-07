var fullImageUrl = require("./images/full.png");
var orderedImageUrl = require("./images/ordered.png");

var vue;

var vueModel = {
    el: "#vue-id",
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        minDay: new Date(2015, 5, 10).getTime(),
        maxDay: new Date(2016, 7, 12).getTime(),
        selectedDates: {
            "2015-07": [15, 16]
        },
        holidays: {
            "2015-06": [6, 7, 13, 14, 20, 21, 22, 27, 28],
            "2015-07": [4, 5, 11, 12, 18, 19, 25, 26],
            "2015-08": [1, 2, 8, 9, 15, 16, 22, 23, 29, 30]
        },
        fullDates: {
            "2015-07": [17, 20]
        },
        orderedDates: {
            "2015-06": [9],
            "2015-07": [17, 21]
        }
    },
    computed: {
        getMonth: function () {
            return this.month + 1;
        },
        getYearMonth: function () {
            var tmp = this.getMonth;
            return this.year + "-" + (tmp < 10 ? "0" : "") + tmp;
        },
        getSelectedDates: function () {
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
        },
        canShowPreviousMonth: function () {
            return new Date(this.year, this.month, 1) > this.minDay;
        },
        canShowNextMonth: function () {
            return new Date(this.year, this.month + 1, 0) < this.maxDay;
        },
        weeks: function () {
            var maxDayOfMonth = new Date(this.year, this.month + 1, 0).getDate();
            var firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

            var yearMonth = this.getYearMonth;

            var selectedDaysOfMonth = this.selectedDates[yearMonth];
            var holidaysOfMonth = this.holidays[yearMonth];
            var fullDaysOfMonth = this.fullDates[yearMonth];
            var orderedDaysOfMonth = this.orderedDates[yearMonth];

            if (!holidaysOfMonth) {
                holidaysOfMonth = [];
            }

            var result = [];

            var tmp = [];
            for (var i = 0; i < firstDayOfMonth; i++) {
                tmp.push({
                    tdClass: "",
                    text: "",
                    isFull: false,
                    isOrdered: false,
                    labelClass: ""
                });
            }

            for (var j = 1; j <= maxDayOfMonth; j++) {
                if (tmp.length == 7) {
                    result.push({
                        days: tmp
                    });
                    tmp = [];
                }

                if ($.inArray(j, holidaysOfMonth) >= 0) {
                    tmp.push({
                        tdClass: "holiday",
                        text: j,
                        isFull: false,
                        isOrdered: false,
                        labelClass: ""
                    });
                } else {
                    var theDay = new Date(this.year, this.month, j).getTime();

                    tmp.push({
                        tdClass: theDay < this.minDay || theDay > this.maxDay ? "out-of-range" : "",
                        text: j,
                        isFull: fullDaysOfMonth && fullDaysOfMonth.length > 0 && $.inArray(j, fullDaysOfMonth) > -1,
                        isOrdered: orderedDaysOfMonth && orderedDaysOfMonth.length > 0 && $.inArray(j, orderedDaysOfMonth) > -1,
                        labelClass: selectedDaysOfMonth && selectedDaysOfMonth.length > 0 && $.inArray(j, selectedDaysOfMonth) > -1 ? "the-label option-checked" : "the-label"
                    });
                }
            }

            while (tmp.length < 7) {
                tmp.push({
                    tdClass: "",
                    text: "",
                    isFull: false,
                    isOrdered: false,
                    labelClass: ""
                });
            }

            result.push({
                days: tmp
            });

            return result;
        }
    },
    methods: {
        showCalendar: function () {
            $(".full-image").attr("src", fullImageUrl);
            $(".ordered-image").attr("src", orderedImageUrl);

            $(".the-label > input[type=checkbox]").change(function () {
                var label = $(this).parent();

                var yearMonth = vue.getYearMonth;

                if (!vue.$data.selectedDates[yearMonth]) {
                    vue.$data.selectedDates[yearMonth] = [];
                }
                var selectedDaysOfMonth = vue.$data.selectedDates[yearMonth];

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

$(document).ready(function () {
    vue = new Vue(vueModel);

    vue.showCalendar();
});