'use strict';

module.exports = [{
  url: '/welcome',
  title: 'Welcome',
  templateUrl: 'views/welcome/index.html',
  controller: 'Welcome as vm',
  otherwise: true
},
{
  url: '/bike-stations',
  title: 'Liste des stations de vélos',
  templateUrl: 'views/bike-stations/list.html',
  controller: 'BikeStations as vm'
},
{
  url: '/bike-stations/:id',
  title: 'Détail d\'une station de vélo',
  templateUrl: 'views/bike-stations/detail.html',
  controller: 'BikeStationDetail as vm',
  params: ['id']
},
{
  url: '/lines',
  title: 'Lignes de bus',
  templateUrl: 'views/lines/list.html',
  controller: 'Lines as vm'
}];
