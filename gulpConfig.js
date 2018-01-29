module.exports = {
    port: 9005,
    protocol: 'http',
    domain: 'localhost',
    paths: {
        html: './src/*.html',
        js: './src/js/**/*.js',
        css: './src/scss/**/*.scss',
        vendor: {
            js: [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/jquery.easing/jquery.easing.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
            ],
            css: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/toastr/build/toastr.min.css'
            ]
        },
        img: './src/img/*',
        dist: './dist',
        entry: './src/index.js',
        sass: './src/index.scss'
    }
}
