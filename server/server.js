// DEPENDENCIES
// ============
var express = require('express');
var port = (process.env.PORT || 1251);
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.use(express.static('public'));

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
