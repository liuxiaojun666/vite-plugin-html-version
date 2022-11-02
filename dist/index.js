"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (version = Date.now().toString()) => {
    const _version = typeof version === 'function' ? version() : version;
    return {
        name: 'html-version',
        transformIndexHtml(html) {
            return html.replace(/<html/, `<html data-version="${_version}"`);
        },
        configResolved(config) {
            (0, fs_1.writeFileSync)(config.publicDir + '/version.txt', _version);
        },
    };
};
