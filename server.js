const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        let pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(handle, pathname, res);
    }

    http.createServer(onRequest).listen(8888, () => {
        console.log('Server listening');
    });
}

exports.start = start;