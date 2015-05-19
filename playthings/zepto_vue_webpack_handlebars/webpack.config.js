module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: "./scripts/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.handlebars$/, loader: "handlebars-loader"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};