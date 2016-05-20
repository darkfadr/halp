var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean-css');

gulp.task('build', function(){
  return gulp.src('./src/main.scss')
    .pipe(sass())
    .pipe(rename('halp.css'))
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task('minify', function(){
  return gulp.src('./src/main.scss')
    .pipe(sass())
    .pipe(clean())
    .pipe(rename('halp.min.css'))
    .pipe(gulp.dest('./build'))
    ;
});

gulp.task('default',['build', 'minify']);
