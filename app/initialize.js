var Application = require('application'),
    routes = require('routes');

// Override
require('core/override');

// Initialize Application
new Application({
  title: 'Brunch example application',
  controllerSuffix: '-controller',
  routes: routes
});
