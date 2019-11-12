import Router from 'url-router'

export default class extends Router {
  from(url) {
    let preserve = ''
    const delimiter = url.match(/\?|#/)

    if (delimiter) {
      preserve = url.slice(delimiter.index)
      url = url.slice(0, delimiter.index)
    }

    const matched = this.find(url)

    return matched
      ? matched.handler && matched.handler.replace(/:(\w+)/g, (_, param) => matched.params[param] || '') + preserve
      : url + preserve
  }
}
