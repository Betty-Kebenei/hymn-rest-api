const express = require('express');
const bodyParser = require('body-parser');

const hymn = require('./routes/hymn.route');
const app = express();

app.use('/hymns', hymn)

let port = 3002;
app.listen(port, () => {
    console.log('Server running on port:' + port);
});