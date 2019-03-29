'use strict';

function urlRewrite(url, rules, returnObject) {
  if (url.constructor !== URL) {
    url = new URL(url);
  }

  const path = url.origin + url.pathname;

  for (const [regexp, replacement, query = true, hash = true] of rules) {
    let url2 = path.replace(regexp, replacement);

    if (!url2) {
      return null
    }

    if (url2 !== path) {
      url2 = new URL(url2);

      if (query) {
        for (const [k, v] of url.searchParams) {
          if (query === true || query.includes(k)) {
            url2.searchParams.append(k, v);
          }
        }
      }

      if (hash) {
        url2.hash = url.hash;
      }

      return returnObject ? url2 : url2.href
    }
  }

  return returnObject ? url : url.href
}

module.exports = urlRewrite;
