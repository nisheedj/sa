import gulp from 'gulp';
import concat from 'gulp-concat';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import clean from 'gulp-clean';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import minifyCss from 'gulp-minify-css';
import browserSync from 'browser-sync';
import angularTemplates from 'gulp-angular-templatecache';
import rename from 'gulp-rename';


gulp.task('less', () => {
  return gulp.src('app/styles/app.less')
    .pipe(less())
    .pipe(rename({
      basename: 'bundle'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(minifyCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe(angularTemplates({
      filename: 'bundle.templates.js',
      module: 'sapient.cart.templates',
      standalone: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['html', 'less'], () => {
  return browserify('./app/scripts/app.js')
    .bundle()
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('superbuild', ['build'], () => {
  return gulp.src([
      './node_modules/angular-modal-service/dst/angular-modal-service.js',
      './dist/bundle.templates.js',
      './dist/bundle.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js-watch', ['superbuild'], browserSync.reload);
gulp.task('html-watch', ['superbuild'], browserSync.reload);
gulp.task('less-watch', ['less'], browserSync.reload);

gulp.task('deploy', ['superbuild'], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("app/**/*.js", ['js-watch']);
  gulp.watch("app/**/*.html", ['html-watch']);
  gulp.watch("app/**/*.less", ['less-watch']);
});


gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
