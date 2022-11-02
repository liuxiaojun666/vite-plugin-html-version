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
      template: 'index.html',
      output: 'index.html',
    }),
  ],
})
```

## Options

| Name     | Type     | Default | Description                                                                 |
| -------- | -------- | ------- | --------------------------------------------------------------------------- |
| version  | `string` |         | version                                                                     |
| template | `string` |         | template file path                                                          |
| output   | `string` |         | output file path                                                            |
| inject   | `object` |         | [html-webpack-plugin](
