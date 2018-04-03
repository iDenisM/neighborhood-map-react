'use strict';

const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({
    style: 'compressed'
  }).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
