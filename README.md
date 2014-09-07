# read-files-promise

[![Build Status](https://travis-ci.org/shinnn/read-files-promise.svg?branch=master)](https://travis-ci.org/shinnn/read-files-promise)
[![Build status](https://ci.appveyor.com/api/projects/status/2ejpbpkek67wdosf)](https://ci.appveyor.com/project/ShinnosukeWatanabe/read-files-promise)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/read-files-promise.svg)](https://coveralls.io/r/shinnn/read-files-promise)
[![Dependency Status](https://david-dm.org/shinnn/read-files-promise.svg)](https://david-dm.org/shinnn/read-files-promise)
[![devDependency Status](https://david-dm.org/shinnn/read-files-promise/dev-status.svg)](https://david-dm.org/shinnn/read-files-promise#info=devDependencies)

[Promise][promise] to read multiple files

```javascript
var readFiles = require('read-files-promise');

readFiles([
  'path/to/file0', // 'apple'
  'path/to/file1', // 'orange'
])
.then(function(buffers) {
  console.log(buffers.map(function(buffer) {
    return buffer.toString();
  })); // yields: ['apple', 'orange']
});
```

If you want to read a single file in the way of promise, use [fs-readfile-promise](https://github.com/shinnn/fs-readfile-promise).

## Installation

[![NPM version](https://badge.fury.io/js/read-files-promise.svg)](https://www.npmjs.org/package/read-files-promise)

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html). (Make sure you have installed [Node](http://nodejs.org/))

```
npm install --save read-files-promise
```

## API

```javascript
var readFiles = require('read-files-promise');
```

### readFiles(*filenames* [, *options*])

*filenames*: array of `String`  
*options*: `Object` (same as [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback) option)  
Return: `Object` ([Promise][promise])

It reads the files specified in its first argument.

When it finish reading the all files, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with an array of [`Buffer`](http://nodejs.org/api/buffer.html#buffer_buffer) (the contents of files) as its first argument.

When it fails to read the file, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

```javascript

var readFiles = require('read-files-promise');

readFiles([
  'path/to/file0' // 'a'
  'path/to/file1' // 'b'
  'path/to/file2' // 'c'
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  console.log.apply(null, buffers); // yields: <Buffer 61> <Buffer 62> <Buffer 63>
};

function onRejected(err) {
  console.log('Cannot read the file.');
};
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[promise]: http://promisesaplus.com/
