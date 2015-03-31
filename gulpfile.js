"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

var FILES = {
  js: [
    'lib/*.js',
    'index.js'
  ],
  test: 'test/*.spec.js'
};
FILES.allJS = FILES.js.concat(FILES.test);

gulp.task('jshint', function() {
  return gulp.src(FILES.allJS)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function(done) {
  return gulp.src(FILES.test)
    .pipe(jasmine());
});

gulp.task('watch', [ 'jshint', 'test' ], function(done) {
  return gulp.watch(FILES.allJS, [
    'jshint',
    'test'
  ]);
});

// default task
gulp.task('default', [ 'watch' ]);