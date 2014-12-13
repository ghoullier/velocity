'use strict';

export default [{
  url: '/welcome',
  title: 'Welcome',
  templateUrl: 'partials/views/welcome/index.html',
  controller: 'Welcome as vm',
  otherwise: true
},
{
  url: '/bike-stations',
  title: 'Liste des stations de vélos',
  templateUrl: 'partials/views/bike-stations/list.html',
  controller: 'BikeStations as vm',
  resolve: {
    stations: /*@ngInject*/function(BikeStationsDataView) {
      return BikeStationsDataView.get();
    }
  }
},
{
  url: '/bike-stations/:id',
  title: 'Détail d\'une station de vélo',
  templateUrl: 'partials/views/bike-stations/detail.html',
  controller: 'BikeStationDetail as vm',
  params: ['id']
},
{
  url: '/lines',
  title: 'Lignes de bus',
  templateUrl: 'partials/views/lines/list.html',
  controller: 'Lines as vm'
}];
