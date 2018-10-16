var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
        var fileStream = fs.createReadStream("./webpage/index.html");
        fileStream.pipe(res); 
}).listen(8088);
