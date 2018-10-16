var fs = require('fs');

fs.appendFile('./outputFiles/File1.txt', 'This file created using fs.appendFile() method', function (err) {
    if (err) throw err;
    console.log('File1 Saved!');
});

fs.open('./outputFiles/File2.txt', 'w', function (err, file) {
	
	console.log(file);
    if (err) throw err;
    console.log('File2 Saved');
});


fs.writeFile('./outputFiles/File3.txt', 'This file created using fs.writeFile() method', function (err) {
    if (err) throw err;
    console.log('File3 Saved!');
});
