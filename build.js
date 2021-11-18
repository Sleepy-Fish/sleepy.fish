const vuePlugin = require('esbuild-vue');
const  sassPlugin =  require("esbuild-sass-plugin").sassPlugin;

require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'dist/out.js',
  loader: { '.ttf': 'file'},
  plugins: [vuePlugin(), sassPlugin()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
});
