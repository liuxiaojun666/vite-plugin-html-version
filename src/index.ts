import { Plugin } from 'vite'
import { writeFileSync } from 'fs'

interface Options {
  version?: string | (() => string)
}
export default ({ version = Date.now().toString() }: Options) => {
  const _version = typeof version === 'function' ? version() : version
  return {
    name: 'html-version',
    transformIndexHtml (html: string) {
      return html.replace(
        /<html/,
        `<html data-version="${_version}"`,
      )
    },
    configResolved (config) {
      writeFileSync(config.publicDir + '/version.txt', _version)
    },
  } as Plugin
}
