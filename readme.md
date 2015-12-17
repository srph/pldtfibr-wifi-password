## pldtfibr-wifi-password
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
pldtfibr-wifi-password (code)
```

### Tests
```bash
npm install
npm test
```