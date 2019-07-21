# querystring-reader


The purpase of the module is to be able to extract the key value pairs from a query string from the browser url quickly and easily and return it as an object.

-------------------------------------------------------

If your qerystring looks like this
- /contact?test=1&foo=bar

This will be returned

- {test: "1", foo: "bar"}

-------------------------------------------------------

## How to use

### Install
```
npm install querystring-reader
```


### Import
```
import querystringreader from 'querystring-reader';
```


### Use
```
console.log('qs', querystringreader.showURLQueryString())
```


