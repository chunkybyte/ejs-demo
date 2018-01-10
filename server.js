var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app'));

app.get('/', function(req, res) {
    var list = [{
            title: 'Stranger Things',
            status: '2'
        },
        {
            title: 'Deuce',
            status: '0'
        },
        {
            title: 'Breaking Bad',
            status: '5'
        }
    ];
    var tagLine = 'Your TV Score';

    res.render('pages/index', {
        tvlist: list,
        tagLine: tagLine
    });
});

app.use(express.static(__dirname + '/app/css'));

app.listen(8080);
console.log("We are listening at port 8080 Y'All");