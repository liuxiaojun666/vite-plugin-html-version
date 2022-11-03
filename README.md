# vite-plugin-html-version

A vite plugin to add version to html.

解决新版本发布后，用户浏览器缓存html导致页面不更新的问题。

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

| Name     | Type     | Default             | Description                    |
| -------- | -------- | ------------------- | ------------------------------ |
| version  | `string` |Date.now().toString()| version                        |

## Demo

```js
// vite.config.js
import { defineConfig } from 'vite'
import htmlVersion from 'vite-plugin-html-version'

export default defineConfig({
  plugins: [
    htmlVersion(),
  ],
})
```

* 通过`data-version`属性，可以在页面中获取当前版本号。
* 通过 fetch(`/version.txt?_t=${Date.now}`) 获取最新版本号。
* 对比版本号，如果版本号不一致，即有新版本发布，刷新页面。

``` js
// 比较版本号
async function diffVersion() {
  const newVersion = await getVersion();
  const oldVersion = document.documentElement?.dataset?.version?.trim();
  // 有新版本
  if (newVersion !== oldVersion) return reload("检测到新版本，即将刷新页面");
}

// 获取最新版本号
function getVersion() {
  return fetch(`/version.txt?_t=${Date.now}`).then((res) => {
    if (res.ok) {
      return res.body
        ?.getReader()
        .read()
        .then(({ value }) => {
          return new TextDecoder().decode(value);
        });
    } else {
      throw new Error("获取版本号失败");
    }
  });
}
```
