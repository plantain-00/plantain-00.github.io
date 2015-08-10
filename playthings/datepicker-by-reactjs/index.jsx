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
    handleClick: function (event) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        return (
            <table class="calendar">
                <thead>
                <tr>
                    <th class="switch-view-button" v-on="click:showPreviousMonth()"
                        v-if="canShowPreviousMonth">&lt;</th>
                    <th v-if="!canShowPreviousMonth"></th>
                    <th colspan="5" class="calendar-head">
                        <span>{this.state.year}</span>年<span>{this.state.month + 1}</span>月
                    </th>
                    <th class="switch-view-button" v-on="click:showNextMonth()" v-if="canShowNextMonth">&gt;</th>
                    <th v-if="!canShowNextMonth"></th>
                </tr>
                <tr>
                    <th class="calendar-head">日</th>
                    <th class="calendar-head">一</th>
                    <th class="calendar-head">二</th>
                    <th class="calendar-head">三</th>
                    <th class="calendar-head">四</th>
                    <th class="calendar-head">五</th>
                    <th class="calendar-head">六</th>
                </tr>
                </thead>
                <tbody>
                <tr v-repeat="weeks">
                    <td v-repeat="days" v-class="tdClass">
                        <span v-if="!canCheck">text</span>
                        <label v-if="canCheck" v-class="labelClass" v-on="click:check(this);">text</label>
                        <img class="full-image" v-if="isFull" v-attr="src:fullImageUrl"/>
                        <img class="ordered-image" v-if="isOrdered" v-attr="src:orderedImageUrl"/>
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