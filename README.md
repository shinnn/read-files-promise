# read-files-promise

[![NPM version](https://img.shields.io/npm/v/read-files-promise.svg)](https://www.npmjs.com/package/read-files-promise)
[![Build Status](https://travis-ci.org/shinnn/read-files-promise.svg?branch=master)](https://travis-ci.org/shinnn/read-files-promise)
[![Build status](https://ci.appveyor.com/api/projects/status/2ejpbpkek67wdosf?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/read-files-promise)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/read-files-promise.svg)](https://coveralls.io/r/shinnn/read-files-promise)
[![Dependency Status](https://img.shields.io/david/shinnn/read-files-promise.svg?label=deps)](https://david-dm.org/shinnn/read-files-promise)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/read-files-promise.svg?label=devDeps)](https://david-dm.org/shinnn/read-files-promise#info=devDependencies)

[Promise][promise] to read multiple files

```javascript
const readFiles = require('read-files-promise');

readFiles([
  'path/to/file0', // 'apple'
  'path/to/file1', // 'orange'
], {encoding: 'utf8'})
.then(buffers => {
  buffers; //=> ['apple', 'orange']
});
```

If you want to read a single file in the way of promise, use [fs-readfile-promise](https://github.com/shinnn/fs-readfile-promise).

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install read-files-promise
```

## API

```javascript
const readFiles = require('read-files-promise');
```

### readFiles(*filenames* [, *options*])

*filenames*: `Array` of `String` (file paths)  
*options*: `Object` or `String` (same as [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)'s second argument)  
Return: `Object` ([Promise][promise])

It reads the files specified in its first argument.

When it finish reading all the files, it will be [*fulfilled*](https://promisesaplus.com/#point-26) with an array of the contents as its first argument. The order of the contents depends on the order of file paths.

When it fails to read at least one of the files, it will be [*rejected*](https://promisesaplus.com/#point-30) with an error as its first argument.

```javascript
const readFiles = require('read-files-promise');

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

Copyright (c) 2014 - 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[promise]: https://promisesaplus.com/
