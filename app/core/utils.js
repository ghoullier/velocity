// Application-specific utilities
// ------------------------------

// Delegate to Chaplin’s utils module.
var extend = Exoskeleton.utils.extend,
    mixed = extend({}, Chaplin.utils, Exoskeleton.utils),
    utils = Chaplin.utils.beget(mixed);

// _.extend(utils, {
//   someMethod: function() {}
// });

// Prevent creating new properties and stuff.
if (typeof Object.seal === 'function') {
  Object.seal(utils);
}

module.exports = utils;
