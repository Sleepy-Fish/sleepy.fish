# sleepy.fish
Its a website

## Tech

Components are built in .jsx files, rendered via React.

Styling is done in SCSS, sort of. Mostly it's done via adding Tailwind classes to components.

Transpilation and bundling is done using esbuild. Tailwind handles the SCSS and outputs a separate CSS file.

## Building

To build the app, run

```bash
npm run build
```

This must be done for every change, there's no filewatching set up yet. This will run esbuild and tailwind. The content will be output to `/dist`. Note that for now, our `index.html` lives permanently in `/dist`.

## Developing

It's recommended to simply run a Python http server from `/dist`.

From with in the `/dist` directory, do


```bash
python -m SimpleHTTPServer
```

Then in a separate terminal, from the project root, do

```bash
npm run build
```

whenever you have changes you want to test.

Open whatever URL your python program outputs to view the site.
