const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const prefix = require('gulp-autoprefixer')

function style() {
  return gulp
    .src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './',
    },
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
exports.default = watch
