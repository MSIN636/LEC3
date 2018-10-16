var fs = require("fs");
var dirName  = "./outputFiles/Temp";
var dirName2 = "outputFiles";
console.log("Creating directory "+dirName);
fs.mkdir(dirName,function(err){
    if (err) { return console.error(err); }
    console.log("Directory created successfully!");
});

console.log("Reading Directory"+ dirName2);
fs.readdir(dirName2,function(err, files){
    if (err) { return console.error(err);}
    files.forEach( function (file){
        console.log( file );
    });
	console.log("displaying the first file");
	console.log(files[0]);
}); 
