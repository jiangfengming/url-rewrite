import Router from 'url-router';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var _default =
/*#__PURE__*/
function (_Router) {
  _inheritsLoose(_default, _Router);

  function _default() {
    return _Router.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.from = function from(url) {
    var preserve = '';
    var delimiter = url.match(/\?|#/);

    if (delimiter) {
      preserve = url.slice(delimiter.index);
      url = url.slice(0, delimiter.index);
    }

    var matched = this.find(url);
    return matched ? matched.handler && matched.handler.replace(/:(\w+)/g, function (_, param) {
      return matched.params[param] || '';
    }) + preserve : url + preserve;
  };

  return _default;
}(Router);

export default _default;
