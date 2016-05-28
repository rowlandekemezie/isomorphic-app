const LiveServer = require('gulp-live-server');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const babelify = require('babelify');
const babel = require('gulp-babel');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live-server', () => {
  const Server = new LiveServer('./server/main.js');
  Server.start();
});

gulp.task('serve', ['bundle', 'live-server'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:8888',
    port: 9001,
  });
  // gulp.watch(['./app/*.ejs', './app/**/*.jsx', './server/*.js'])
  // .on('change', browserSync.reload);
});

gulp.task('watch', () => {
  gulp.watch(['./app/*.ejs', './app/**/*.jsx', './server/**/*.js'], ['bundle'])
  .on('change', browserSync.reload);
});

gulp.task('es6-transform', () => {
  gulp.src('./server/*.(js|jsx)')
    .pipe(babel())
    .pipe(gulp.dest('./dest/temp'));
});

gulp.task('copy', () => {
  gulp.src(['./app/*.css'])
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('bundle', ['copy'], () =>
   browserify({
     entries: './app/main.jsx',
     debug: true,
   })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'))
);

gulp.task('default', ['watch', 'serve']);
