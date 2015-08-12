var TestComponent = React.createClass({displayName: "TestComponent",
    getInitialState: function () {
        return {
            names: ['a', 'b', 'c']
        }
    },
    render: function () {
        return React.createElement("div", null, 
            
                this.state.names.map(function (name) {
                    return React.createElement("div", {style: {color:"red"}, className: "test"}, 
                        "Hello, ", name, "!")
                })
            
        )
    }
});

React.render(
    React.createElement(TestComponent, null),
    document.getElementById("container")
);