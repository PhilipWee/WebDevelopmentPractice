var http = require('http');
var url = require('url');
var dt = require('./data')

var gah = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('gay' + dt.myDateTime());
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  res.write(q.test);
  res.end();
}

var bah = http.createServer(gah)

bah.listen(8080)
