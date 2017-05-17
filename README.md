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
```

## Installation

```
npm i -g wstest
```

## License

MIT 2017 - José F. Romaniello
