var page = require('webpage').create();
var system = require('system');

var htmlString = system.args[1];
console.log('htmlString',htmlString);
page.content = htmlString;
//let document = null;
page.evaluate(function(arg1, arg2){
    console.log('evaluate called');
    //document = document;
});
page.onLoadFinished = function(str) {
    console.log(page.evaluate(function(){
        return document.body.scrollHeight;
    }));
    phantom.exit();
};

//page.render('colorwheel.png');
