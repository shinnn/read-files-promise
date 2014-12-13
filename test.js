'use strict';

var test = require('tape');
var readFiles = require('./');

test('readFilesPromise()', function(t) {
  t.plan(8);

  t.equal(readFiles.name, 'readFilesPromise', 'should have a function name.');

  readFiles(['.gitignore', '.gitattributes']).then(function(bufs) {
    t.deepEqual(
      [bufs[0].toString(), bufs[1].toString()],
      ['coverage\nnode_modules\n', '* text=auto\n'],
      'should read multiple files.'
    );
  });

  readFiles(['.gitattributes'], 'utf8').then(function(bufs) {
    t.deepEqual(bufs, ['* text=auto\n'], 'should reflect encoding setting to the result.');
  });

  readFiles([], null).then(function(bufs) {
    t.deepEqual(bufs, [], 'should read nothing when it takes an empty array.');
  });

  readFiles(['./package.json', 'this/file/does/not.exists']).catch(function(err) {
    t.equal(
      err.code,
      'ENOENT',
      'should be rejected with an error when it fails to read a file.'
    );
  });

  t.throws(
    readFiles.bind(null, ['.gitignore'], {encoding: 'foo'}),
    /Unknown encoding: foo/,
    'should throw an error when the encoding is not supported.'
  );

  t.throws(
    readFiles.bind(null, 'package.json'),
    /TypeError.*is not an array/,
    'should throw a type error when its first argument is not an array.'
  );

  t.throws(
    readFiles.bind(null),
    /TypeError.*is not an array/,
    'should throw a type error when it takes no arguments.'
  );
});
