const http = require('http')

http.createServer((req, resp) => {
resp.write("hello this is ashwini ");
resp.end();

}).listen(4500);