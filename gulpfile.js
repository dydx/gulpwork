var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css');

// lint and compile JS
gulp.task('js-lint-minify', function() {
  return gulp.src('build/js/*.js') // read all files in script/lib
    .pipe(jshint()) // run them through JSHint
    .pipe(jshint.reporter('default')) // report findings
    .pipe(concat('app.js')) // concat them into all.js
    .pipe(gulp.dest('dist/js')) // send that in dist/js
    .pipe(rename('app.min.js')) // rename the file in memory to all.min.js
    .pipe(uglify()) // uglify the file
    .pipe(gulp.dest('dist/js'));
});

// lint, compile, and minify SASS
gulp.task('scss-lint-compile-minify', function() {
  // stuff for processing SASS in here
  return gulp.src('build/styles/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/style'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/style'));
});

// build the app
gulp.task('default', [
  'js-lint-minify',
  'scss-lint-compile-minify'
]);
