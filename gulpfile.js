var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('js-linting-compiling', function() {
  return gulp.src('build/*.js') // read all files in script/lib
    .pipe(jshint()) // run them through JSHint
    .pipe(jshint.reporter('default')) // report findings
    .pipe(concat('all.js')) // concat them into all.js
    .pipe(gulp.dest('dist/js')) // send that in dist/js
    .pipe(rename('all.min.js')) // rename the file in memory to all.min.js
    .pipe(uglify()) // uglify the file
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', function() {
  // stuff here
});
