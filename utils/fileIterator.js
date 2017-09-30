const dirTree = require('directory-tree');
let plugins = dirTree(__dirname + '/../app/Plugins');
module.exports = {
  plugins:plugins.children,
}
