'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

//Convert scss to css
gulp.task('sass', function () {
  gulp.src('src/stylesheets/scss/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('src/stylesheets/css/'));
});
//Minify css
gulp.task('compresscss', function() {
    gulp.src('src/stylesheets/css/*.css')
	    .pipe(cssnano())
	    .pipe(rename({
	  		suffix: '.min'
		}))
	    .pipe(gulp.dest('dist/stylesheets/css/'));
});
//Minify js
gulp.task('compressjs', function () {
  gulp.src('src/js/*.js')
	    .pipe(uglify())
	    .pipe(rename({
	      suffix: '.min'
	    }))
    .pipe(gulp.dest('dist/js/'));
});
//Watch scss, css and js files for changes
gulp.task('default', function () {
	gulp.watch(['src/stylesheets/scss/*.scss'], ['sass']);
	gulp.watch(['src/stylesheets/css/*.css'], ['compresscss']);
	gulp.watch(['src/js/*.js'], ['compressjs']);
});