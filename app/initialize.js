var Application = require('application');
var routes = require('routes');

document.addEventListener('DOMContentLoaded', function() {
  new Application({
    title: 'Brunch example application',
    controllerSuffix: '-controller',
    routes: routes
  });
})
