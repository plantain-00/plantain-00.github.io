var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var ejs = require("gulp-ejs");
var rev = require('gulp-rev-hash');
var minifyHTML = require('gulp-minify-html');
var autoprefixer = require('autoprefixer-core');
var postcss = require('gulp-postcss');
var minifyCSS = require('gulp-minify-css');
var gulpSequence = require('gulp-sequence');

gulp.task("css", function () {
    gulp.src("./css/normalize.css")
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(minifyCSS())
        .pipe(rename('normalize.min.css'))
        .pipe(gulp.dest("./css/"));

    gulp.src("./css/index.css")
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(minifyCSS())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest("./css/"));
});

gulp.task("js", function () {
    gulp.src('./javascripts/index.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.handlebars$/, loader: "handlebars-loader"},
                    {test: /\.(png|jpg)$/, loader: 'url-loader'},
                    {test: /\.css$/, loader: 'style-loader!css-loader'},
                    {test: /\.json$/, loader: 'json-loader'}
                ]
            },
            plugins: [
                new webpack.webpack.optimize.UglifyJsPlugin({minimize: true})
            ]
        }))
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./javascripts/'));
});

gulp.task("html", function () {
    var minifyHTMLConfig = {
        conditionals: true,
        spare: true
    };

    gulp.src("./index.ejs")
        .pipe(ejs({}))
        .pipe(rev())
        .pipe(minifyHTML(minifyHTMLConfig))
        .pipe(rename('index.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('default', function (next) {
    gulpSequence(["css", "js"], 'html', next);
});
