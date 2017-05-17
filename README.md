Test websocket connectivity.

## Usage

```
wstest [options] <url>

Options:
  --timeout, -t  Maximum time in seconds allowed for connection.    [default: 5]
  --help, -h     Show help                                             [boolean]
```

Example:

```
» wstest ws://echo.websocket.org
Successfully connected to ws://echo.websocket.org.
» wstest ws://example.com
Error: unexpected server response (200).
```


It can also be used as a library:

```javascript
const wstest = require('wstest');

wstest({ url: 'ws://echo.websocket.org', timeout: 5000 }, (err) => {
  console.log(err);
});
```

## Installation

```
npm i -g wstest
```

## License

MIT 2017 - José F. Romaniello
