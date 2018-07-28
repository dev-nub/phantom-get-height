var page = require('webpage').create();
var system = require('system');

var htmlString = system.args[1];
page.content = htmlString;
page.onLoadFinished = function(str) {
    console.log(page.evaluate(function(){
        return document.body.scrollHeight;
    }));
    phantom.exit();
};

//page.render('colorwheel.png');
