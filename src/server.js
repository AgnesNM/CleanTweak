// const http = require('http');
// const app = require('../app');

// const normalizePort = val => {
//     const port = parseInt(val, 10);

//     if(isNaN(port)){
//         return val;
//     }
//     if(port >= 0){
//         return port;
//     }
//     return false;
// };

// const port = normalizePort(process.env.PORT || '3000');

// app.set('port', port);

// const errorHandler = error => {
//     if(error.syscall !== 'listen'){
//         throw error;
//     }
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
//     switch(error.code){
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges.');
//             process.exit(1);
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use.');
//             process.exit(1);
//             break;
//         default:
//             throw error;    
//     }
// };

// const server = http.createServer(app);

// server.on('error', errorHandler);
// server.on('listening', () => {
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
//     console.log('Listening on ' + bind);
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }

// server.listen(port);


let express = require('express');
const app = require('..app/app.js');

let port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});