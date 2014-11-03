var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , sass = require('gulp-sass')
  , deploy = require('gulp-gh-pages')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , autoprefixer = require('gulp-autoprefixer')
  , minifycss = require('gulp-minify-css')
  , imagemin = require('gulp-imagemin')
  , pngquant = require('imagemin-pngquant');

// Browserify Task
gulp.task('browserify', function () {
  gulp.src('js/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'));
});

// Deploy task
gulp.task('deploy', function () {
  gulp.src('_site/**/*')
    .pipe(deploy());
});