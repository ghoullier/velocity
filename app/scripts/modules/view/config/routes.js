'use strict';

module.exports = [{
  url: '/welcome',
  title: 'Welcome',
  templateUrl: 'views/welcome.html',
  controller: 'Welcome as vm',
  otherwise: true
},
{
  url: '/bike-stations',
  title: 'Liste des stations de vélos',
  templateUrl: 'views/bike-stations.html',
  controller: 'BikeStations as vm'
},
{
  url: '/bike-stations/:id',
  title: 'Détail d\'une station de vélo',
  templateUrl: 'views/bike-station-detail.html',
  controller: 'BikeStationDetail as vm',
  params: ['id']
},
{
  url: '/lines',
  title: 'Lignes de bus',
  templateUrl: 'views/lines.html',
  controller: 'Lines as vm'
}];
