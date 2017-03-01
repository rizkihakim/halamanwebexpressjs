var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Muhammad Rizki Hakim');
   res.send('Universitas Gadjah Mada');
   res.send('Ilmu Komputer 2015');
   res.send('Harapannya bisa membuat AI yang menyetarai jarvis / AI untuk para jomblo')
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})