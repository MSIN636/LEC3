var fs = require("fs");
var buf = new Buffer(1024);
var fileName = "./outputFiles/File4.txt";
var fileData=" This file created using fs.open() method";

console.log(" creating "+ fileName+ " . . .");

fs.open(fileName, 'w+', function(err, fd) {
    if (err) { return console.error(err); }
    console.log("Writing to "+ fileName+ " . . .");
	fs.write(fd, fileData, "utf8", function(err, bytes){
		console.log("Writting successfully");
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if (err){ console.log(err); }
			// Print only read bytes to avoid junk.
			if(bytes > 0){
				console.log("reading successfully");            
				console.log(buf.slice(0, bytes).toString());
			}
			// Close the opened file.
			fs.close(fd, function(err){
				if (err){ console.log(err);}
				console.log("File closed successfully.");
			});
		});
	});
});
