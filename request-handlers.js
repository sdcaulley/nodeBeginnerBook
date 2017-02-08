function start() {
    console.log('Request handler "Start" was called.');
    return 'Hello Start!';
}

function upload() {
    console.log('Request handler "Upload" was called.');
    return 'Hello Upload!';
}

exports.start = start;
exports.upload = upload;