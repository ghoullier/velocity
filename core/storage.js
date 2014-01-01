var Class = require('./class')
  , Store = Class.extend({
    constructor: function(storage) {
      this.storage = storage
    },
    set: function(key, value) {
      this.storage.setItem(key, JSON.stringify({
        value: value
      }))
    },
    get: function(key) {
      return JSON.parse(this.storage.getItem(key)).value
    },
    remove: function(key) {
      this.storage.removeItem(key)
    },
    has: function(key) {
      return null !== this.storage.getItem(key)
    },
    clear: function() {
      this.storage.clear()
    }
  })
module.exports.locale = Store.create(window.localStorage)
module.exports.session = Store.create(window.sessionStorage)
