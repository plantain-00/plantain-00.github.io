var names = ['a', 'b', 'c'];

React.render(
    React.createElement("div", null, 
        
            names.map(function (name) {
                return React.createElement("div", {style: {color:"red"}, className: "test"}, "Hello, ", name, "!")
            })
        
    ),
    document.getElementById("container")
);