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
    handleClick: function (event) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        return (
            React.createElement("table", {class: "calendar"}, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", {class: "switch-view-button", "v-on": "click:showPreviousMonth()", 
                        "v-if": "canShowPreviousMonth"}, "<"), 
                    React.createElement("th", {"v-if": "!canShowPreviousMonth"}), 
                    React.createElement("th", {colspan: "5", class: "calendar-head"}, 
                        React.createElement("span", null, this.state.year + 1), "年", React.createElement("span", null, this.state.month + 1), "月"
                    ), 
                    React.createElement("th", {class: "switch-view-button", "v-on": "click:showNextMonth()", "v-if": "canShowNextMonth"}, ">"), 
                    React.createElement("th", {"v-if": "!canShowNextMonth"})
                ), 
                React.createElement("tr", null, 
                    React.createElement("th", {class: "calendar-head"}, "日"), 
                    React.createElement("th", {class: "calendar-head"}, "一"), 
                    React.createElement("th", {class: "calendar-head"}, "二"), 
                    React.createElement("th", {class: "calendar-head"}, "三"), 
                    React.createElement("th", {class: "calendar-head"}, "四"), 
                    React.createElement("th", {class: "calendar-head"}, "五"), 
                    React.createElement("th", {class: "calendar-head"}, "六")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement("tr", {"v-repeat": "weeks"}, 
                    React.createElement("td", {"v-repeat": "days", "v-class": "tdClass"}, 
                        React.createElement("span", {"v-if": "!canCheck"}, "text"), 
                        React.createElement("label", {"v-if": "canCheck", "v-class": "labelClass", "v-on": "click:check(this);"}, "text"), 
                        React.createElement("img", {class: "full-image", "v-if": "isFull", "v-attr": "src:fullImageUrl"}), 
                        React.createElement("img", {class: "ordered-image", "v-if": "isOrdered", "v-attr": "src:orderedImageUrl"})
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