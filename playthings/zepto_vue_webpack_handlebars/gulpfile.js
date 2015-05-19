var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src('./scripts/main.js')
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
});