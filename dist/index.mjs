import Router from 'url-router';

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

var Rewriter =
/*#__PURE__*/
function () {
  function Rewriter() {
    for (var _len = arguments.length, rules = new Array(_len), _key = 0; _key < _len; _key++) {
      rules[_key] = arguments[_key];
    }

    this._router = _construct(Router, rules);
  }

  var _proto = Rewriter.prototype;

  _proto.add = function add(from, to) {
    this._router.add(from, to);
  };

  _proto["do"] = function _do(url) {
    var preserve = '';
    var delimiter = url.match(/\?|#/);

    if (delimiter) {
      preserve = url.slice(delimiter.index);
      url = url.slice(0, delimiter.index);
    }

    var matched = this._router.find(url);

    if (matched) {
      if (!matched.handler) {
        return '';
      } else if (/:\w/.test(matched.handler)) {
        return matched.handler.replace(/:(\w+)/g, function (_, param) {
          return matched.params[param] || '';
        }) + preserve;
      } else {
        return matched.handler + preserve;
      }
    } else {
      return url + preserve;
    }
  };

  return Rewriter;
}();

export default Rewriter;
