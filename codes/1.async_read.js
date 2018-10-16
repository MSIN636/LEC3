var fs = require("fs");
var colors = require('colors');
// Asynchronous read 
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous File system read:".red);
	console.log(data.toString().yellow);
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous File system read:".red);
console.log(data.toString().yellow);
console.log("Program Ended".blue);
