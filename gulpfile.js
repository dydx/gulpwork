var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    notify = require('gulp-notify');

// lint ES6, transpile to ES5, compile, and uglify
gulp.task('js-lint-minify', function() {
  return gulp.src('build/js/*.js')
    .pipe(jshint({esnext: true}))
    .pipe(jshint.reporter('default'))
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// transpile to CSS, compile, and minify
gulp.task('scss-lint-compile-minify', function() {
  // stuff for processing SASS in here
  return gulp.src('build/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/style'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/style'));
});

// watch dir
gulp.task('watch', function() {
  gulp.watch('build/js/*.js', ['js-lint-minify']);
  gulp.watch('build/styles/*.scss', ['scss-lint-compile-minify']);
});

// build the app
gulp.task('default', [
  'js-lint-minify',
  'scss-lint-compile-minify',
  'watch'
]);