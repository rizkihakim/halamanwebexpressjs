var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Muhammad Rizki Hakim, Universitas Gadjah Mada, Ilmu Komputer 2015, Harapannya bisa membuat AI yang menyetarai jarvis / AI untuk para jomblo')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})