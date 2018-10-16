console.log("File: " + __filename);
console.log("Location: "+__dirname);
console.log("Current Directory: "+process.cwd());

try {
	process.chdir("/");
} catch (error) {
	console.error("chdir error: " + error.message);
}
console.log("Current Directory Now " + process.cwd());
