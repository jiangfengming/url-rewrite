const assert = require('assert')
const urlRewrite = require('./es6')

const rules = [
  ['https://www.example.com/foo/', 'https://example.com/bar/'],
  [/^https:\/\/www\.example\.com\/(.*\.png)$/, 'https://assets.example.com/$1?a=1', ['v'], false]
]

assert.equal(urlRewrite('https://www.example.com/foo/a?q=1', rules), 'https://example.com/bar/a?q=1')
assert.equal(urlRewrite('https://www.example.com/a/b.png?v=2&c=3#h', rules), 'https://assets.example.com/a/b.png?a=1&v=2')
