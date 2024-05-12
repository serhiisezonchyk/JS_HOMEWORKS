import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import fs from 'fs';

const sass = gulpSass(dartSass);

gulp.task('buildHtml', () => {
  return gulp
    .src('src/pages/*.html')
    .pipe(replace('../styles/','styles/'))
    .pipe(replace('../js/','js/'))
    .pipe(replace('../images/','images/'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
});

gulp.task('buildStyles', () => {
  return gulp
    .src('src/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on('error', sass.logError),
      //{outputStyle: 'compressed'}
    )
    .pipe(replace('url("~/fonts/")', 'url("./../fonts/")'))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/styles/css'))
    .pipe(browserSync.stream());
});
gulp.task('buildJs', () => {
  return gulp
    .src(['src/js/**/*.js', '!src/js/test', '!**/*.test.js'])
    .pipe(terser())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});

gulp.task('minifyImages', () => {
  if (!fs.existsSync('src/images')) {
    console.error(`Error: Source directory not found.`);
    return;
  }

  return gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('build/images')).pipe(browserSync.stream());
});

gulp.task('watch', () => {
  //by default will be trigger on create/change/delete
  gulp.watch('src/pages/*.html', { delay: 500 }, gulp.series('buildHtml'));
  gulp.watch('src/styles/scss/**/*.scss', { delay: 500 }, gulp.series('buildStyles'));
  gulp.watch('src/js/**/*.js', { delay: 500 }, gulp.series('buildJs'));
  gulp.watch('src/images/*', gulp.series('minifyImages'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: 'build/',
    },
    port: 3000,
  });

  gulp.watch('src/pages/*.html', gulp.series('buildHtml')).on('change', browserSync.reload);
  gulp.watch('src/styles/scss/**/*.scss', gulp.series('buildStyles'));
  gulp.watch('src/js/**/*.js', gulp.series('buildJs'));
  gulp.watch('src/images/*', gulp.series('minifyImages'));
});

gulp.task('development', gulp.series(gulp.parallel('buildHtml', 'buildStyles', 'buildJs', 'minifyImages'), 'serve'));

gulp.task('default', gulp.parallel('buildHtml', 'buildStyles', 'buildJs', 'minifyImages'));
