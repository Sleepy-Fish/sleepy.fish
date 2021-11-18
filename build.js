const  sassPlugin =  require("esbuild-sass-plugin").sassPlugin;
const autoprefixer = require("autoprefixer");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'dist/out.js',
  loader: { '.ttf': 'file'},
  // plugins: [sassPlugin(),
  //              postCssPlugin({
  //                plugins: [autoprefixer, require('tailwindcss')],
  //              }), ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
});
