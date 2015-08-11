var DatePicker = React.createClass({
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
            <th className="switch-view-button" onClick="showPreviousMonth()">&lt;</th>
        ) : (
            <th></th>
        );
        var canShowNextMonth = new Date(this.state.year, this.state.month + 1, 0) < this.state.maxDay;
        var showNextMonthHtml = canShowNextMonth ? (
            <th className="switch-view-button" onClick="showNextMonth()">&gt;</th>
        ) : (
            <th></th>
        );
        return (
            <table className="calendar">
                <thead>
                <tr>
                    {{showPreviousMonthHtml}}
                    <th colspan="5" className="calendar-head">
                        <span>{this.state.year}</span>年<span>{this.state.month + 1}</span>月
                    </th>
                    {{showNextMonthHtml}}
                </tr>
                <tr>
                    <th className="calendar-head">日</th>
                    <th className="calendar-head">一</th>
                    <th className="calendar-head">二</th>
                    <th className="calendar-head">三</th>
                    <th className="calendar-head">四</th>
                    <th className="calendar-head">五</th>
                    <th className="calendar-head">六</th>
                </tr>
                </thead>
                <tbody>
                <tr v-repeat="weeks">
                    <td v-repeat="days" v-class="tdClass">
                        <span v-if="!canCheck">text</span>
                        <label v-if="canCheck" v-class="labelClass" v-on="click:check(this);">text</label>
                        <img className="full-image" v-if="isFull" v-attr="src:fullImageUrl"/>
                        <img className="ordered-image" v-if="isOrdered" v-attr="src:orderedImageUrl"/>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
});

React.render(
    <DatePicker/>,
    document.getElementById("container")
);