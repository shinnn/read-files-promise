/*!
 * read-files-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/read-files-promise
*/
'use strict';

var readMultipleFiles = require('read-multiple-files');
var wrapPromise = require('wrap-promise');

module.exports = function readFilesPromise(filePaths, options) {
  return wrapPromise(function(resolve, reject) {
    readMultipleFiles(filePaths, options, function(err, bufs) {
      if (err) {
        reject(err);
        return;
      }
      resolve(bufs);
    });
  });
};
