Getting Started: 


1. Install node module:

```
npm install phantom-get-height
```


2. In File

```js
import getPageHeight  = require('phantom-get-height');


 var html = `<html></html>`; //html string
 getPageHeight(html,  (height) => {
  //height is page height in pixels
 });

```
