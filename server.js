var server = require('pushstate-server');

server.start({
    port: 3000,
    directory: './www',
    file: '/index.html'
});