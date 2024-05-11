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
  return gulp.src(['src/js/**/*.js', '!src/js/test', '!**/*.test.js']).pipe(terser()).pipe(gulp.dest('./build/js'));
});

gulp.task('watch', () => {
  //by default will be trigger on create/change/delete
  gulp.watch('src/pages/*.html', { delay: 500 }, gulp.series('minify'));
  gulp.watch('src/styles/scss/**/*.scss', { delay: 500 }, gulp.series('sass'));
  gulp.watch('src/js/**/*.js', { delay: 500 }, gulp.series('js'));

  //Dir watcher
  const dirWatcher = gulp.watch(['src/**']);
  dirWatcher.on('addDir', function (path, stats) {
    console.log(`Dir ${path} was added`);
  });
  dirWatcher.on('unlinkDir', function (path, stats) {
    console.log(`Dir ${path} was removed`);
  });

  //File watcher
  const fileWatcher = gulp.watch(['src/**/*.*']);
  fileWatcher.on('change', function (path, stats) {
    console.log(`File ${path} was changed`);
  });
  fileWatcher.on('add', function (path, stats) {
    console.log(`File ${path} was added`);
  });
  fileWatcher.on('unlink', function (path, stats) {
    console.log(`File ${path} was removed`);
  });
});

gulp.task('default', gulp.parallel('minify', 'sass', 'js'));
