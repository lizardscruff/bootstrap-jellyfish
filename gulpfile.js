// TODO: include an uglify step
// TODO: make it with scss/sass

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('reload', function(done) {
  browserSync.reload();
  done();
});

gulp.task('serve', function(done) {
  browserSync({
    browser: ['firefox'],
    server: {
      baseDir: './'
    }
  });

  gulp.watch('index.html', gulp.series('reload'));
  done();

  gulp.watch('app.css', gulp.series('reload'));
  done();
});