const LiveServer = require('gulp-live-server');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const babelify = require('babelify');
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
});

gulp.task('watch', () => {
  gulp.watch('./app/*.ejs', ['bundle'], browserSync.reload);
  gulp.watch('./app/**/*.jsx', ['bundle'], browserSync.reload);
  gulp.watch('./server/**/*.js', ['bundle'], browserSync.reload);
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
  .transform(babelify)
  .transform(reactify)
  .transform(babelify.configure({
    sourceMaps: true,
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'))
);

gulp.task('default', ['watch', 'serve']);
