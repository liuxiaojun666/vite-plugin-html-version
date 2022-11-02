# vite-plugin-html-version

A vite plugin to add version to html.

## Install

```bash
npm i vite-plugin-html-version -D
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite'
import htmlVersion from 'vite-plugin-html-version'

export default defineConfig({
  plugins: [
    htmlVersion({
      version: '1.0.0',
    }),
  ],
})
```

## Result
  
```html
<!DOCTYPE html>
<html data-version="1667206656289" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script type="module" src="/src/index.a3s5rdf2f3.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## Options

| Name     | Type     | Default | Description                                                                 |
| -------- | -------- | ------- | --------------------------------------------------------------------------- |
| version  | `string` |         | version                                                                     |
