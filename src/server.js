const express = require('express');
const app = require('./app/app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Our app is running on http://localhost: + ${port}`);
});