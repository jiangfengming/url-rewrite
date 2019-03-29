function urlRewrite(url, rules, returnObject) {
  if (url.constructor !== URL) {
    url = new URL(url);
  }

  var path = url.origin + url.pathname;

  for (var _iterator = rules, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        regexp = _ref2[0],
        replacement = _ref2[1],
        _ref2$ = _ref2[2],
        query = _ref2$ === void 0 ? true : _ref2$,
        _ref2$2 = _ref2[3],
        hash = _ref2$2 === void 0 ? true : _ref2$2;
    var url2 = path.replace(regexp, replacement);

    if (!url2) {
      return null;
    }

    if (url2 !== path) {
      url2 = new URL(url2);

      if (query) {
        for (var _iterator2 = url.searchParams, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref3 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref3 = _i2.value;
          }

          var _ref4 = _ref3,
              k = _ref4[0],
              v = _ref4[1];

          if (query === true || query.includes(k)) {
            url2.searchParams.append(k, v);
          }
        }
      }

      if (hash) {
        url2.hash = url.hash;
      }

      return returnObject ? url2 : url2.href;
    }
  }

  return returnObject ? url : url.href;
}

export default urlRewrite;
