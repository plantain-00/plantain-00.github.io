var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var ejs = require("gulp-ejs");

gulp.task('default', function () {
    gulp.src('./scripts/main.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.handlebars$/, loader: "handlebars-loader"},
                    {test: /\.(png|jpg)$/, loader: 'url-loader'},
                    {test: /\.css$/, loader: 'style-loader!css-loader'}
                ]
            }
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./'));

    gulp.src("./index.ejs")
        .pipe(ejs({
            version: Math.round(Math.random() * 2176782336).toString(36)
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest("./"));
});
