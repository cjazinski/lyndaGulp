//Notice its in JS
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

//Easier to read
var coffeeSources = ['components/coffee/tagline.coffee']; //can use * wildcard
var jsSources = ['components/scripts/*.js'];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'));
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('builds/development/js'));
});