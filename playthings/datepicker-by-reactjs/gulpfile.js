var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer-core');
var postcss = require('gulp-postcss');
var minifyCSS = require('gulp-minify-css');
var webpack = require('gulp-webpack');
var ejs = require("gulp-ejs");
var rev = require('gulp-rev-hash');
var minifyHTML = require('gulp-minify-html');
var react = require('gulp-react');

var minifyHTMLConfig = {
    conditionals: true,
    spare: true
};

gulp.task("css", function () {
    gulp.src("./index.css")
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(minifyCSS())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest("./"));
});

gulp.task("js", function () {
    gulp.src('./index.jsx')
        .pipe(react())
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.(png|jpg)$/, loader: 'url-loader'}
                ]
            },
            plugins: [
                new webpack.webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"production"'
                    }
                }),
                new webpack.webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    },
                    minimize: true
                })
            ]
        }))
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task("html", function () {
    gulp.src("./index.ejs")
        .pipe(ejs({}))
        .pipe(rev())
        .pipe(minifyHTML(minifyHTMLConfig))
        .pipe(rename('index.html'))
        .pipe(gulp.dest("./"));
});

gulp.task('default', ["css", "js", 'html']);