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
                './node_modules/materialize-css/dist/js/materialize.js'
            ],
            css: [
                './node_modules/font-awesome/css/font-awesome.min.css',
                './node_modules/materialize-css/dist/css/materialize.min.css'
            ],
            scss: [],
            fonts: [
                './node_modules/font-awesome/fonts/fontawesome-webfont.*',
                './node_modules/materialize-css/dist/fonts/roboto/*'
            ]
        },
        img: './src/img/*',
        dist: './dist',
        entry: './src/index.js',
        sass: './src/index.scss'
    }
}
