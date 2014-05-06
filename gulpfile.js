var gulp = require('gulp');
var jade = require('gulp-jade');


gulp.task('jade', function(){
  var YOUR_LOCALS = {};

  gulp.src("./front/jade/*jade")
  .pipe(jade({
    locals: YOUR_LOCALS,
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'))

});
