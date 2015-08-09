var DatePicker = React.createClass({
    getInitialState: function () {
        return {liked: false};
    },
    handleClick: function (event) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <table class="calendar">
                <thead>
                <tr>
                    <th class="switch-view-button" v-on="click:showPreviousMonth()"
                        v-if="canShowPreviousMonth">&lt;</th>
                    <th v-if="!canShowPreviousMonth"></th>
                    <th colspan="5" class="calendar-head"><span v-text="year"></span>年<span v-text="getMonth"></span>月
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
                        <span v-if="!canCheck">{{text}}</span>
                        <label v-if="canCheck" v-class="labelClass" v-on="click:check(this);">{{text}}</label>
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