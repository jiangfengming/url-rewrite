# url-rewrite
A URL rewrite utility.

## Import
### webpack
es5
```js
import urlRewrite from 'url-rewrite'
```

es6
```js
import urlRewrite from 'url-rewrite/es6'
```

### node.js
es5
```js
const urlRewrite = require('url-rewrite')
```

es6
```js
const urlRewrite = require('url-rewrite/es6')
```

## Usage
```js
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
urlRewrite(url, rules, returnObject)
```

### Paramaters

#### url
`String` | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL). The original URL.

#### rules
`Array`. Rewrite rules.

```js
[
  [regexp, replacement, query = true, hash = true],
  ...
]
```

##### regexp, replacement
Same parameters as `String.replace(regexp, replacement)`.

The underlying replace formula is:
```js
const url = new URL(url)
const newURL = (url.origin + url.pathname).replace(regexp, replacement)
```

##### query
`Boolean` | `Array`. Whether to keep the query string. Defaults to `true`.
You can use array to specify which query params to keep. e.g., `['id', 'key']`

##### hash
`Boolean`. Whether to keep hash. Defaults to `true`.

#### returnObject
`Boolean`. If set to `true`, return the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object.

### Returns
`String` | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) | `null`.
The rewrited URL. Or the original URL if no rule matched.
If the rewrited URL is an empty string, `null` is returned.
