var gulp = require('gulp'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean-css');

gulp.task('build', function(){
  return gulp.src('./src/main.scss')
    .pipe(sass())
    .pipe(clean())
    .pipe(gulp.dest('./build'));
});

gulp.task('default',['build']);
