const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 3002;
app.listen(port, () => {
    console.log('Server running on port:' + port);
});