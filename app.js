var chokidar = require('chokidar');
var path = require('path');

var currentPath = path.dirname('/repos/personal');

// var watcher = chokidar.watch('', {
//     ignored: /(^|[\/\\])\../,
//     persistent: true
// });

// var log = console.log.bind(console);

// var msg = 'Hello World';
console.log(currentPath);