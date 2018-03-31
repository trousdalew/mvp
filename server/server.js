const express = require('express');
let app = express();

let port = 3013;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});

app.use(express.static(__dirname + '/../client/dist'));