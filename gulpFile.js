var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var lint = require('gulp-eslint');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var config = require('./gulpConfig');
var baseurl = config.protocol+'://'+config.domain;

gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        host: config.domain,
        port: config.port,
        base: baseurl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: baseurl + ':' + config.port + '/'}));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format());
})

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.entry)
        .transform(babelify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src(config.paths.sass)
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('img', function(){
    gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/img'));
})

gulp.task('vendor-js', function() {
    gulp.src(config.paths.vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('vendor-css', function() {
    gulp.src(config.paths.vendor.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('vendor', ['vendor-js', 'vendor-css']);


gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch([config.paths.entry, config.paths.js], ['js', 'lint']);
    gulp.watch([config.paths.sass, config.paths.css], ['sass'])
});

gulp.task('default', ['open', 'html', 'js', 'sass', 'vendor', 'img', 'lint', 'watch']);