const gulp = require('gulp'),
      purgecss = require('gulp-purgecss');
      gulp.task('purgecss', () => {
        return gulp
          .src('src/**/*.css')
          .pipe( 
            purgecss({
              content: ['src/**/*.html']
            })
          )
          .pipe(gulp.dest('build/'))
      })