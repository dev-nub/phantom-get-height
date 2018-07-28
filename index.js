var spawn = require('child_process').spawn;



function getPageHeight(htmlString, cb) {
    var args = ['./lib/phantom-script.js', htmlString];
    // In case you want to customize the process, modify the options object
    var options = {};
    var phantomExecutable = './node_modules/.bin/phantomjs';
    var child = spawn(phantomExecutable, args, options);

    // Receive output of the child process
    child.stdout.on('data', function(data) {
        var textData = Uint8ArrToString(data);
        cb(textData);
    });

    child.on('close', function(code) {
        console.log('Process closed with status code: ' + code);
    });

}

/**
 * This method converts a Uint8Array to its string representation
 */
function Uint8ArrToString(myUint8Arr){
    return String.fromCharCode.apply(null, myUint8Arr);
};

exports.getPageHeight = getPageHeight;