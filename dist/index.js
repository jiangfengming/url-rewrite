'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Router = _interopDefault(require('url-router'));

class Rewriter {
  constructor(...rules) {
    this._router = new Router(...rules);
  }

  add(from, to) {
    this._router.add(from, to);
  }

  do(url) {
    let preserve = '';
    const delimiter = url.match(/\?|#/);

    if (delimiter) {
      preserve = url.slice(delimiter.index);
      url = url.slice(0, delimiter.index);
    }

    const matched = this._router.find(url);

    return matched
      ? matched.handler && matched.handler.replace(/:(\w+)/g, (_, param) => matched.params[param] || '') + preserve
      : url + preserve
  }
}

module.exports = Rewriter;
