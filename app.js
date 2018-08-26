var chokidar = require('chokidar');
var path = require('path');

// var currentPath = path.dirname('D:\\Repos\\Personal\\NodeFolderWatch\app.js');
// var relativePath = path.dirname('/Repos/Personal/NodeFolderWatch/app.js');
// var baseName = path.basename('/Repos/Personal/NodeFolderWatch/app.js');
var folderToWatch = path.parse('/Repos/Personal/FolderToWatch/');


var watcher = chokidar.watch(path.join(folderToWatch.dir, 'FolderToWatch/'), {
    ignored: /(^|[\/\\])\../,
    persistent: true
});

var log = console.log.bind(console);

watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    log('Raw event info:', event, path, details);
  });

// var msg = 'Hello World';
// console.log(currentPath);
// console.log(relativePath);
// console.log(baseName);
// console.log(folderToWatch);
// var parsed = path.join(folderToWatch.dir, 'FolderToWatch/');
// console.log(parsed);
