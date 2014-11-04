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
  gulp.src('_src/_js/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Sass Task
gulp.task('sass', function () {
  gulp.src('_src/_sass/main.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// Imagemin
gulp.task('imagemin', function () {
  gulp.src('_src/_img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

// Deploy Task
gulp.task('deploy', function () {
  gulp.src('_site/**/*')
    .pipe(deploy());
});

// Watch Task