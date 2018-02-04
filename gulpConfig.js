module.exports = {
    port: 9005,
    protocol: 'http',
    domain: 'localhost',
    entry: 'dist/index.html',
    paths: {
        index: {
            njk: './src/index.njk',
            js: './src/index.js',
            scss: './src/index.scss',
        },
        glob: {
            njk: './src/**/*.njk',
            js: './src/js/**/*.js',
            scss: './src/scss/**/*.scss'
        },
        vendor: {
            js: [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/materialize-css/dist/js/materialize.js'
            ],
            css: [
                './node_modules/font-awesome/css/font-awesome.min.css'
            ],
            scss: [
                './node_modules/materialize-css/sass/materialize.scss'
            ],
            fonts: [
                './node_modules/font-awesome/fonts/fontawesome-webfont.*',
                './node_modules/materialize-css/dist/fonts/roboto/*'
            ],
            overrides: [{
                trg: {
                    path: './node_modules/materialize-css/sass/components/',
                    file: '_variables.scss'
                },
                src: {
                    path: './src/scss/overrides/',
                    file: '_materialize.scss'
                }
            }]
        },
        img: './src/img/*',
        dist: './dist'
    }
}