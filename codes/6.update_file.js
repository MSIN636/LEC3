var fs = require('fs');

fs.appendFile('./outputFiles/File1.txt', ' This content will append the file using appedFile() method', function (err) {
    if (err) throw err;
    console.log('File1 Updated!');
});


fs.writeFile('./outputFiles/File3.txt', 'This content will replace any previous content in that file using writeFile() method', function (err) {
    if (err) throw err;
    console.log('File3 Updated!');
});
