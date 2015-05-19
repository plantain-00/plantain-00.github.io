module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.handlebars$/, loader: "handlebars-loader"},
            {test: /\.(png|jpg)$/, loader: 'url-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};