var Controller = require('controllers/base/controller'),
    HeaderView = require('views/home/header-view'),
    HomePageView = require('views/home/home-page-view');

module.exports = Controller.extend({
  beforeAction: function() {
    this.constructor.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {region: 'header'});
  },

  index: function() {
    this.view = new HomePageView({region: 'main'});
  }

});
