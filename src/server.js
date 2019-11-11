let express = require('express');
const app = require('../app/app.js');

let port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});