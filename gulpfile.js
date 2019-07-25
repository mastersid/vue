'use strict';

//npm install gulp gulp-less gulp-watch gulp-clean gulp-clean-css browser-sync --save-dev

var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css');

var path = {
    build: { 
        css:    'css/'
    },
    dev: {
        css:    ['less/*.less']
    },
    watch: { 
        css:    ['less/*.less']
    },
    clean: ['css/*.css']
};

//css
gulp.task('style:build', gulp.series(function (s) {
    gulp.src(path.dev.css) 
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8', level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({
          stream: true
        }))
        s();
}));

//clean
gulp.task('clean', function() {
  return gulp.src(path.clean, {read: false})
    .pipe(clean());
});

//build
gulp.task('build', gulp.parallel(
    'clean',
    'style:build'
));

//watch
gulp.task('watch', gulp.parallel(function(w){
    watch('less/*.less', function(event, cb) {
        gulp.parallel('style:build','browserSync')();
    });
    w();
}));

//browser Sync

gulp.task('browserSync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
})

//start
gulp.task('default', gulp.series('build', 'watch'));