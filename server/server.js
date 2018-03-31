const express = require('express');
const morgan = require('morgan');
let app = express();

let port = 3013;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/search/user/:username', (req, res) => {
  console.log('Searching for user: ', req.params.username);
  res.send(req.params.username);
});

app.get('/search/tag/:hashtag', (req, res) => {
  console.log('Searching for tag: ', req.params.hashtag);
  res.send(req.params.hashtag);
});