const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');

gulp.task('minify', () => {
  return gulp
    .src('src/pages/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/pages'));
});

gulp.task('sass', () => {
  return gulp
    .src('src/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on('error', sass.logError),
      //{outputStyle: 'compressed'}
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/styles/css'));
});
gulp.task('js', () => {
  return gulp.src(['src/js/**/*.js','!src/js/test','!**/*.test.js']).pipe(terser()).pipe(gulp.dest('./build/js'));
});
gulp.task('default', gulp.parallel('minify', 'sass','js'));
