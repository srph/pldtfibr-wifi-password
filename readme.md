## pldtfibr-wifi-password [![npm version](http://img.shields.io/npm/v/pldtfibr-wifi-password.svg?style=flat-square)](https://npmjs.org/package/pldtfibr-wifi-password?style=flat-square) [![Build Status](https://img.shields.io/travis/srph/pldtfibr-wifi-password.svg?style=flat-square)](https://travis-ci.org/srph/pldtfibr-wifi-password?branch=master)
```bash
npm install pldtfibr-wifi-password
```
A mac-address reverser to obtain the default password of a PLDTHOMEFIBR Wifi. An implementation of http://infotechmaestro.blogspot.com/2014/12/pldt-homefiber-and-pldt-home-dsl-new.html.

### Usage
```js
var password = require('pldtfibr-wifi-password');
password('c5c4c9'); // 'wlan3a3b36'
```

### CLI
Requirements include Node.js (`>=0.12`) and npm `>=2.x`.
```
npm install -g pldtfibr-wifi-password
pldtfibr-wifi-password c3c4c9 # the last 6 digits of the wifi name
```

### Tests
```bash
npm install
npm test
```