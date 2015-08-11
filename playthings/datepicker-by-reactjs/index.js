var DatePicker = React.createClass({displayName: "DatePicker",
    getInitialState: function () {
        return {
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
        };
    },
    showPreviousMonth: function () {
        var nextMonth = new Date(this.state.year, this.state.month - 1, 1);
        var partialState = {};
        partialState["year"] = nextMonth.getFullYear();
        partialState["month"] = nextMonth.getMonth();
        this.setState(partialState);
    },
    showNextMonth: function () {
        var nextMonth = new Date(this.state.year, this.state.month + 1, 1);
        var partialState = {};
        partialState["year"] = nextMonth.getFullYear();
        partialState["month"] = nextMonth.getMonth();
        this.setState(partialState);
    },
    render: function () {
        var canShowPreviousMonth = new Date(this.state.year, this.state.month, 1) > this.state.minDay;
        var showPreviousMonthHtml = canShowPreviousMonth ? (
            React.createElement("th", {className: "switch-view-button", onClick: "showPreviousMonth()"}, "<")
        ) : (
            React.createElement("th", null)
        );
        var canShowNextMonth = new Date(this.state.year, this.state.month + 1, 0) < this.state.maxDay;
        var showNextMonthHtml = canShowNextMonth ? (
            React.createElement("th", {className: "switch-view-button", onClick: "showNextMonth()"}, ">")
        ) : (
            React.createElement("th", null)
        );
        return (
            React.createElement("table", {className: "calendar"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    {showPreviousMonthHtml}, 
                    React.createElement("th", {colspan: "5", className: "calendar-head"}, 
                        React.createElement("span", null, this.state.year), "年", React.createElement("span", null, this.state.month + 1), "月"
                    ), 
                    {showNextMonthHtml}
                ), 
                React.createElement("tr", null, 
                    React.createElement("th", {className: "calendar-head"}, "日"), 
                    React.createElement("th", {className: "calendar-head"}, "一"), 
                    React.createElement("th", {className: "calendar-head"}, "二"), 
                    React.createElement("th", {className: "calendar-head"}, "三"), 
                    React.createElement("th", {className: "calendar-head"}, "四"), 
                    React.createElement("th", {className: "calendar-head"}, "五"), 
                    React.createElement("th", {className: "calendar-head"}, "六")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement("tr", {"v-repeat": "weeks"}, 
                    React.createElement("td", {"v-repeat": "days", "v-class": "tdClass"}, 
                        React.createElement("span", {"v-if": "!canCheck"}, "text"), 
                        React.createElement("label", {"v-if": "canCheck", "v-class": "labelClass", "v-on": "click:check(this);"}, "text"), 
                        React.createElement("img", {className: "full-image", "v-if": "isFull", "v-attr": "src:fullImageUrl"}), 
                        React.createElement("img", {className: "ordered-image", "v-if": "isOrdered", "v-attr": "src:orderedImageUrl"})
                    )
                )
                )
            )
        );
    }
});

React.render(
    React.createElement(DatePicker, null),
    document.getElementById("container")
);