'use strict';

var ES6Promise = global.Promise || require('es6-promise').Promise;

var readFile = require('fs-readfile-promise');

module.exports = function readFilesPromise(filePaths, options) {
  if (!Array.isArray(filePaths)) {
    throw new TypeError(filePaths + ' is not an array.');
  }

  return ES6Promise.all(filePaths.map(function(filePath) {
    return readFile(filePath, options);
  }));
};
