'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create();

//less
gulp.task('less', function () {
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}}}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

//clean
gulp.task('clean', function () {
  return gulp.src('css/style.css', {read: false})
    .pipe(clean());
});

//browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
})

//stream
gulp.task('stream', function() {
  gulp.watch(['less/*.less'], gulp.series('less'));
  gulp.watch(['*.html']).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('less', gulp.parallel('stream', 'browserSync')));