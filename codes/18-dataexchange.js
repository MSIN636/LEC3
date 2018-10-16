var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

        res.writeHead(200,{'Content-Type':'text/html'});
		res.write("Request Url: "+ req.url + "<br>");
		res.write("Request Method: "+ req.method);
        res.end();

}).listen(8088);
