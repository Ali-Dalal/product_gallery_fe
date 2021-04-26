require('dotenv').config();
const app = require('./app');
const http = require('http');

const port = process.env.PORT || 3001;
const server = http.createServer(app);

app.set('port', port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    throw error;
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + port;
    // eslint-disable-next-line no-console
    console.log('Listening on ' + bind);
}

server.listen(Number(port), '0.0.0.0', async () => {
    console.log(`Service started on port ${port}`);
});