# url-rewrite
A URL rewrite utility.

## Install
```
npm install url-rewrite
```

## Usage
```js
const assert = require('assert')
const Rewriter = require('url-rewrite')

const rewriter = new Rewriter(
  ['https://www.example.com/foo', 'https://example.com/bar'],
  ['https://www.example.com/images/:file(.*)', 'https://images.example.com/:file']
)

rewriter.add('https://ads.example.com/(.*)', '')

assert.strictEqual(
  rewriter.from('https://www.example.com/foo?a=1'),
  'https://example.com/bar?a=1'
)

assert.strictEqual(
  rewriter.from('https://www.example.com/images/a/b.png?v=2&c=3#h'),
  'https://images.example.com/a/b.png?v=2&c=3#h'
)

assert.strictEqual(
  rewriter.from('https://ads.example.com/foo/bar'),
  ''
)
```

## License
[MIT](LICENSE)
