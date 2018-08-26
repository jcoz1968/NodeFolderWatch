var chokidar = require('chokidar');
var path = require('path');

//var currentPath = path.dirname('D:\\Repos\\Personal\\NodeFolderWatch\app.js');
var relativePath = path.dirname('/Repos/Personal/NodeFolderWatch/app.js');
var baseName = path.basename('/Repos/Personal/NodeFolderWatch/app.js');

// var watcher = chokidar.watch('', {
//     ignored: /(^|[\/\\])\../,
//     persistent: true
// });

// var log = console.log.bind(console);

// var msg = 'Hello World';
//console.log(currentPath);
console.log(relativePath);
console.log(baseName);
