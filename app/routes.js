// Application routes.
module.exports = function(match) {
  match('', {controller: 'home', action: 'index'});
  match('bikes', {controller: 'bikes', action: 'list'});
  match('bikes/:id', {controller: 'bikes', action: 'detail'});
};
