var fs = require("fs");
var dirName  = "./outputFiles/Temp";
var dirName2 = "outputFiles";
console.log("Removing "+dirName);

if (fs.existsSync(dirName)){
	console.log("directory exists ");
	fs.rmdir(dirName,function(err){
		console.log("removing directory");
		if (err) { return console.error(err);}
	});
}

console.log("Reading Directory"+ dirName2);
fs.readdir(dirName2,function(err, files){
    if (err) { return console.error(err);}
    files.forEach( function (file){
        console.log( file );
    });
}); 
