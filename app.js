var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.post('/oauth/token', function (req, res) {
    response = {
    access_token : 'af26117fff2e1a7bc7f744f89806c05da7759663e2a85199163eee81d1c0c693',
    token_type : 'bearer',
    expires_in : 7200
    };
    res.send(response);
});

app.post('/api/somecall', function (req, res) {
    console.log(req.headers);
    if (req.headers['authorization']) {
        res.send();
    } else {
        res.status(403).send('Forbidden')
    }
});

app.post('/oauth/revoke', function (req, res) {
    res.send();
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
