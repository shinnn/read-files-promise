'use strict';

var test = require('tape');
var readFiles = require('./');

test('fsReadFilePromise()', function(t) {
  t.plan(5);

  readFiles(['.gitattributes'])
  .then(function(bufs) {
    t.equal(bufs[0].toString(), '* text=auto\n', 'should read a file.');
  });

  readFiles(['.gitignore', '.gitattributes'])
  .then(function(bufs) {
    t.deepEqual(
      [bufs[0].toString(), bufs[1].toString()],
      ['coverage\nnode_modules\n', '* text=auto\n'],
      'should read multiple files.'
    );
  });

  readFiles(['./package.json', 'this/file/does/not.exists'])
  .catch(function(err) {
    t.equal(
      err.code, 'ENOENT',
      'should be rejected with an error when it fails to read a file.'
    );
  });

  readFiles(['./package.json'], {encoding: 'foo'})
  .catch(function(err) {
    t.equal(err.message, 'Unknown encoding: foo', 'should accept an option object.');
  });

  t.throws(
    readFiles.bind(null, 'package.json'),
    /is not an array/,
    'should throw an type error when its first argument is not an array.'
  );
});
