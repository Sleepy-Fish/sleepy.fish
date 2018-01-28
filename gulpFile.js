var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor-js', function() {
    gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery.easing/jquery.easing.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('vendor-css', function() {
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/vendor'));
});
gulp.task('vendor', ['vendor-js', 'vendor-css']);

// Default task
gulp.task('default', ['vendor']);