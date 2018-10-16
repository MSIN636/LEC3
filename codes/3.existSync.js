var fs = require("fs");
var dirName = "outputFiles";

if (fs.existsSync(dirName)){
		console.log(dirName  +" Exists");
}else {
		console.log(dirName  +" Not Exist!!");
}
