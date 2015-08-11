var names = ['a', 'b', 'c'];

React.render(
    <div>
        {
            names.map(function (name) {
                return <div style={{color:"red"}} className="test">Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById("container")
);