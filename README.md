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
], {encoding: 'utf8'})
.then(function(buffers) {
  buffers; //=> ['apple', 'orange']
});
```

If you want to read a single file in the way of promise, use [fs-readfile-promise](https://github.com/shinnn/fs-readfile-promise).

## Installation

[![NPM version](https://badge.fury.io/js/read-files-promise.svg)](https://www.npmjs.com/package/read-files-promise)

[Use npm.](https://docs.npmjs.com/cli/install)

```sh
npm install read-files-promise
```

## API

```javascript
var readFiles = require('read-files-promise');
```

### readFiles(*filenames* [, *options*])

*filenames*: `Array` of `String` (file paths)  
*options*: `Object` or `String` (same as [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)'s second argument)  
Return: `Object` ([Promise][promise])

It reads the files specified in its first argument.

When it finish reading all the files, it will be [*fulfilled*](http://promisesaplus.com/#point-26) with an array of the contents as its first argument. The order of the contents depends on the order of file paths.

When it fails to read at least one of the files, it will be [*rejected*](http://promisesaplus.com/#point-30) with an error as its first argument.

```javascript

var readFiles = require('read-files-promise');

readFiles([
  'path/to/file0' // 'a'
  'path/to/file1' // 'b'
  'path/to/file2' // 'c'
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers; //=> [<Buffer 61>, <Buffer 62>, <Buffer 63>]
};

function onRejected(err) {
  console.log('Cannot read the file.');
};
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[promise]: http://promisesaplus.com/
