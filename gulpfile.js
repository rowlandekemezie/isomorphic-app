const LiveServer = require('gulp-live-server');
const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('live-server', () => {
  const Server = new LiveServer('./server/main.js');
  Server.start();
});

gulp.task('serve', ['live-server'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:7777',
    port: 9001,
  });
  gulp.watch('./app/*.ejs').on('change', browserSync.reload);
});
