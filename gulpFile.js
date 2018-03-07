var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var connect = require('gulp-connect');
var open = require('gulp-open');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var minifyJS = require('gulp-minify');
var minifyCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var merge = require('merge-stream');
var lint = require('gulp-eslint');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sequence = require('run-sequence');

var config = require('./gulpConfig');
var baseurl = config.protocol + '://' + config.domain;

gulp.task('connect', function() {
    return connect.server({
        root: ['dist'],
        host: config.domain,
        port: config.port,
        base: baseurl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function() {
    return gulp.src(config.entry)
        .pipe(open({ uri: baseurl + ':' + config.port + '/' }));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.glob.js)
        .pipe(lint({ configFile: 'eslint.config.json' }))
        .pipe(lint.format());
})

gulp.task('njk', function() {
    return gulp.src(config.paths.index.njk)
        .pipe(nunjucks.compile({ page_title: 'Sleepy Fish' }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    return browserify(config.paths.index.js)
        .transform(babelify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('scss', function() {
    return gulp.src(config.paths.index.scss)
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('img', function() {
    return gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/img'));
})

gulp.task('vendor-override', function() {
    var overrides = []
    for (var override of config.paths.vendor.overrides) {
        overrides.push(gulp.src(config.paths.vendor.override + override.src)
            .pipe(rename(override.trg.file))
            .pipe(gulp.dest(override.trg.path)))
    }
    return merge(...overrides);
});

gulp.task('vendor-js', function() {
    return gulp.src(config.paths.vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('vendor-css', function() {
    var scssStream = gulp.src(config.paths.vendor.scss)
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(concat('scss-files.scss'));

    var cssStream = gulp.src(config.paths.vendor.css)
        .pipe(concat('css-files.css'));

    return merge(scssStream, cssStream)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'));

});
gulp.task('vendor-fonts', function() {
    return gulp.src(config.paths.vendor.fonts)
        .pipe(gulp.dest('./dist/fonts'));
});
gulp.task('vendor', function() {
    sequence('vendor-override', ['vendor-js', 'vendor-css', 'vendor-fonts'])
});

gulp.task('clean', function() {
    return gulp.src(config.paths.dist, { read: false })
        .pipe(clean());
});
gulp.task('watch', function() {
    gulp.watch(config.paths.glob.njk, ['njk']);
    gulp.watch([config.paths.index.js, config.paths.glob.js], ['js', 'lint']);
    gulp.watch([config.paths.index.scss, config.paths.glob.scss], ['scss']);
    gulp.watch(config.paths.vendor.override + '*', ['vendor']);
});

gulp.task('minify', function(){
    gulp.src('dist/js/*.js')
        .pipe(minifyJS({ext:{src:'-debug.js',min:'.js'}}))
        .pipe(gulp.dest('dist/js'))
    gulp.src('dist/css/*.css')
        .pipe(minifyCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', function(){
    sequence('clean', ['njk', 'js', 'scss', 'vendor', 'img', 'lint'], 'minify');
});

gulp.task('dev-build', function(){
    sequence('clean', ['njk', 'js', 'scss', 'vendor', 'img', 'lint']);
});

gulp.task('default', function() {
    sequence('dev-build', ['open', 'watch'])
});