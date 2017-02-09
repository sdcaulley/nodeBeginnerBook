const exec = require('child_process').exec;

function start(res) {
    console.log('Request handler "Start" was called.');

    exec('ls -lah', (error, stdout, stderr) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(stdout);
        res.end();
    });
}

function upload(res) {
    console.log('Request handler "Upload" was called.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Upload!');
    res.end();
}

exports.start = start;
exports.upload = upload;