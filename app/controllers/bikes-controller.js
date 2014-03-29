var Controller = require('controllers/base/controller'),
    BikesListView = require('views/bikes/bikes-list-view'),
    BikesDetailView = require('views/bikes/bikes-detail-view');

module.exports = Controller.extend({
  list: function() {
    console.log('BikeController::list');
    this.view = new BikesListView({region: 'main'});
  },

  detail: function(id) {
    console.log('BikeController::detail', id);
    this.view = new BikesDetailView({region: 'main'});
  }
});
