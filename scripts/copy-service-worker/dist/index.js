"use strict";

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Watching changes on service worker');

_fsExtra.default.watch('./.next/static/service-worker.js', {}, async () => {
  console.log('New change on service worker');
  const fileContent = await _fsExtra.default.readFile('./.next/static/service-worker.js');
  await _fsExtra.default.writeFile('./static/service-worker.js', fileContent);
  console.log('Change copied');
});