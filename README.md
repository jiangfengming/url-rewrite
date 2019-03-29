# url-rewrite
A URL rewrite utility.

## Usage
```js
const urlRewrite = require('url-rewrite')

const rules = [
  ['https://www.example.com/foo/', 'https://example.com/bar/'],
  [/^https:\/\/www\.example\.com\/(.*\.png)$/, 'https://assets.example.com/$1?a=1', ['v'], false]
]

urlRewrite('https://www.example.com/foo/a?q=1', rules)
// -> 'https://example.com/bar/a?q=1'

urlRewrite('https://www.example.com/a/b.png?v=2&c=3#h', rules)
// -> 'https://assets.example.com/a/b.png?a=1&v=2'
```

## urlRewrite()

Rewrite the url according to the rules.

```js
urlRewrite(url, rules)
```

### Paramaters

#### url
The original URL

#### rules
Rewrite rules.

```js
[
  [regexp, replacement, query = true, hash = true],
  ...
]
```

##### regexp, replacement
The underlying replace formula is:
```js
const url = new URL(url)
const newURL = (url.origin + url.pathname).replace(regexp, replacement)
```

##### query
Whether to keep the query string. Defaults to `true`.
You can use array to specify which query params to keep. e.g., `['id', 'key']`

##### hash
Whether to keep hash. Defaults to `true`.

### Returns
The rewrited URL. Or the original URL if no rule matched.
