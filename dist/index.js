'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Router = _interopDefault(require('url-router'));

class index extends Router {
  from(url) {
    let preserve = '';
    const delimiter = url.match(/\?|#/);

    if (delimiter) {
      preserve = url.slice(delimiter.index);
      url = url.slice(0, delimiter.index);
    }

    const matched = this.find(url);

    return matched
      ? matched.handler && matched.handler.replace(/:(\w+)/g, (_, param) => matched.params[param] || '') + preserve
      : url + preserve
  }
}

module.exports = index;
