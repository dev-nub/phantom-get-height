var page = require('webpage').create();
var system = require('system');

var htmlString = system.args[1];
var width = 570;
var height = 768;

page.viewportSize = {width: width, height: height};

page.content = htmlString;
page.onLoadFinished = function(str) {
    console.log(page.evaluate(function(){
        return document.body.scrollHeight;
    }));
    phantom.exit();
};

//page.render('colorwheel.png');
