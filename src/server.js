const express = require('express');
const app = require('../app/app.js');

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Our app is running on http://localhost:${port}`);
});