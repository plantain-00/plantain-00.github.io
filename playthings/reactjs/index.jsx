var TestComponent = React.createClass({
    getInitialState: function () {
        return {
            names: ['a', 'b', 'c']
        }
    },
    render: function () {
        return <div>
            {
                this.state.names.map(function (name) {
                    return <div style={{color:"red"}} className="test">
                        Hello, {name}!</div>
                })
            }
        </div>
    }
});

React.render(
    <TestComponent/>,
    document.getElementById("container")
);