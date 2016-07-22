# ༓ WS: #irDevConf Tweets.

![#irDevConf Tweets](https://raw.githubusercontent.com/siamak/react-for-developers/master/screenshot.jpg)

[**#irDevConf Tweets**](http://twitter.siamak.work/) an app with React.js. In 1 Hour Workshop Covering React.js in ES6 at July 22th 2016 in Tehran, Iran.

## 🔥 How to use

First, you should clone the repo and install the dependencies.

```bash
$ git clone https://github.com/siamak/react-for-developers.git
$ cd react-for-developers
$ [sudo] npm install
```

For `Development` :
```bash
$ npm start
```

For Deploy:
```bash
$ npm run deploy
```

### Start server
Go to [Twitter Developers](https://dev.twitter.com/) and after login and creating a new app, copy your `consumer_key`, `consumer_secret`, `access_token`, `access_token_secret` in `server/index.js`.

If you want edit port and address, change `PORT` in `server/index.js` then open `src/modules/connection.js` and edit request url.

Finally start node server:
```bash
$ cd server
$ node index
```
Note: If you are in Iran you need to change your IP for accessing twitter.

## 🍀 License
Thanks to [Mohammad Rajabifard](https://github.com/morajabi) for Twitter API.
Copyright (c) 2016 Siamak Mokhtari. Licensed under [MIT](http://siamak.mit-license.org).

```
The MIT License (MIT)

Copyright (c) 2016 Siamak Mokhtari s.mokhtari75@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
