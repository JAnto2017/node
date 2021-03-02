var http = require('http');
http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type': 'text/plai'});
	res.end('<h1>Hola mundo</h1>');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

