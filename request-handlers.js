function start() {
    console.log('Request handler "Start" was called.');
}

function upload() {
    console.log('Request handler "Upload" was called.');
}

exports.start = start;
exports.upload = upload;