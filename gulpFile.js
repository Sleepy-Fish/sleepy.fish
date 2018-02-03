var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var connect = require('gulp-connect');
var open = require('gulp-open');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var merge = require('merge-stream');
var lint = require('gulp-eslint');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sequence = require('run-sequence');

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
    gulp.src(config.entry)
        .pipe(open({uri: baseurl + ':' + config.port + '/'}));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.glob.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format());
})

gulp.task('njk', function(){
    gulp.src(config.paths.index.njk)
        .pipe(nunjucks.compile({page_title: 'Sleepy Fish'}))
        .pipe(rename({extname:'.html'}))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.index.js)
        .transform(babelify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('scss', function () {
    gulp.src(config.paths.index.scss)
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
    var scssStream = gulp.src(config.paths.vendor.scss)
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(concat('scss-files.scss'));
    
    var cssStream = gulp.src(config.paths.vendor.css)
        .pipe(concat('css-files.css'));

    merge(scssStream, cssStream)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'));

});
gulp.task('vendor-fonts', function() {
    gulp.src(config.paths.vendor.fonts)
    .pipe(gulp.dest('./dist/fonts'));
});
gulp.task('vendor', ['vendor-js', 'vendor-css', 'vendor-fonts']);

gulp.task('clean', function () {
    gulp.src(config.paths.dist, {read: false})
        .pipe(clean());
});
gulp.task('watch', function(){
    gulp.watch(config.paths.glob.njk, ['njk']);
    gulp.watch([config.paths.index.js, config.paths.glob.js], ['js', 'lint']);
    gulp.watch([config.paths.index.scss, config.paths.glob.scss], ['scss'])
});

gulp.task('default', [/*'clean',*/ 'open', 'njk', 'js', 'scss', 'vendor', 'img', 'lint', 'watch']);