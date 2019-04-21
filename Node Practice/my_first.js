var http = require('http');
var url = require('url');
//var dt = require('./data');
var fs = require('fs');

var mysql = require('mysql');
var mysqlx = require('@mysql/xdevapi');
var events = require('events');
var eventEmitter = new events.EventEmitter();

// const config = {
//   password: 'Marisstella123!',
//   user: 'root',
//   host: 'localhost',
//   port: 9753,
//   schema: 'sakila'
// }
//
// mysqlx.getSession(config).then(session => {
//   console.log(session.inspect());
//
// })

var con = mysql.createConnection({
  host: 'localhost',
  port: '9753',
  user: 'root',
  password: 'Marisstella123!',
  database: 'chess'
});

con.connect(function(err){
  if (err) throw err;
  //console.log('connected');
  var sql = "SELECT * FROM board"
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    var alph = 'abcdefgh'
    for (var i=0; i<=7; i++) {
      for (var j=0; j<=7; j++) {
        var curr_alph = alph.charAt(j);
        //console.log(i+curr_alph);
        //console.log(result[i][curr_alph]);
        if (result[i][curr_alph] != null){
          //console.log('not null')
          //Now at this point, i is the row_no, j is the col_no, curr_alph is the alphabet corresponding to the col_no
          //result[i][current_alph] is the piece at coord i,j

          //Piece handling code goes here
        }
      }
    }
  });
});

var gah = function (req, res) {

  fs.readFile('main.html', function(err,data){
    res.writeHead(200, {'Content-Type': 'html'});
    res.write(data);
    res.write(`
      <body>
        <p>test</p>
        <input type='button' name='press me' value='test' onclick="alert('test')">
      </body>
    `);
    res.end();
  });
  /*res.write(`
    <body>
      <p>test</p>
      <input type='button' name='press me' value='test'>
    </body>
  `);*/

  //res.write('gay' + dt.myDateTime());
  //res.write(req.url);
  //var q = url.parse(req.url, true).query;
  //res.write(q.test);
  //res.end();
}

var bah = http.createServer(gah)

bah.listen(8023)
