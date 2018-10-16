var fs = require("fs");
var path = require("path");

var filename = path.join(process.cwd(),__filename);
console.log("File Path: "+filename);
console.log("File extension: "+path.extname(filename));
console.log("File basename: "+path.basename(filename));
console.log("File directory: "+path.dirname(filename));

