!function t(e,i,a){function n(s,r){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!r&&l)return l(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[s]={exports:{}};e[s][0].call(c.exports,function(t){var i=e[s][1][t];return n(i?i:t)},c,c.exports,t,e,i,a)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<a.length;s++)n(a[s]);return n}({1:[function(t){"use strict";t("./modules/common/module"),t("./modules/data/module"),t("./modules/data-view/module"),t("./modules/templates/module"),t("./modules/view/module")},{"./modules/common/module":3,"./modules/data-view/module":7,"./modules/data/module":13,"./modules/templates/module":19,"./modules/view/module":27}],2:[function(t,e){e.exports={name:"velocity",version:"0.1.0",repository:{type:"git",url:"https://github.com/ghoullier/velocity.git"},author:{name:"Grégory Houllier",url:"https://twitter.com/ghoullier"},keywords:["angular","devstack","livereload","browserify"],scripts:{postinstall:"node ./node_modules/bower/bin/bower install",postupdate:"node ./node_modules/bower/bin/bower update",prestart:"npm install",start:"node ./node_modules/gulp/bin/gulp.js develop",prebuild:"npm install",build:"node ./node_modules/gulp/bin/gulp.js build --production",predeploy:"npm run build",deploy:"node ./node_modules/gulp/bin/gulp.js publish","preupdate-webdriver":"npm install","update-webdriver":"webdriver-manager update",protractor:"protractor tests/e2e/protractor.conf.js"},devDependencies:{"6to5-browserify":"^1.2.0",bower:"^1.3.12",browserify:"^7.0.0","browserify-ngannotate":"^0.4.0",compression:"^1.2.1","connect-livereload":"^0.5.2",del:"^1.0.0",express:"^4.10.4",gulp:"^3.8.10","gulp-angular-templatecache":"^1.4.2","gulp-autoprefixer":"2.0.0","gulp-concat":"^2.4.2","gulp-embedlr":"^0.5.2","gulp-htmlmin":"^0.2.0","gulp-gh-pages":"^0.4.0","gulp-jshint":"^1.9.0","gulp-livereload":"^2.1.0","gulp-plumber":"^0.6.6","gulp-rename":"^1.2.0","gulp-sass":"^1.2.4","gulp-sourcemaps":"^1.2.8","gulp-uglify":"^1.0.1","gulp-util":"^3.0.1",minimist:"^1.1.0","tiny-lr":"0.1.4","vinyl-source-stream2":"^0.1.1"},engines:{node:">=0.10.0"},license:"MIT"}},{}],3:[function(t,e,i){"use strict";var a=t("./providers/cache-storage")["default"],n=t("./services/geolocation")["default"],o=t("./services/logger")["default"];i["default"]=angular.module("velocity.common",[]).provider("CacheStorage",a).factory("Geolocation",n).factory("Logger",o)},{"./providers/cache-storage":4,"./services/geolocation":5,"./services/logger":6}],4:[function(t,e,i){"use strict";function a(){function t(t){a=t}function e(t,e){function i(){l||(l=!0,t(function(){a.setItem(o,JSON.stringify(s)),l=!1},0))}function n(t){var e=t in s?s[t]:{},a=angular.extend({},{id:t});s[t]=e;var n={put:function(t,a){return e[t]=a,i(),a},get:function(t){return e[t]},remove:function(t){delete e[t],i()},removeAll:function(){e={},i()},destroy:function(){e=null,a=null,delete r[t],delete s[t],i()},info:function(){return angular.extend({},a)}};return r[t]=n,n}null===a&&this.setStrategy(e.localStorage);var o="ng:storage",s=a.getItem(o)?JSON.parse(a.getItem(o)):{},r={},l=!1;return n.info=function(){var t={};return angular.forEach(r,function(e,i){t[i]=e.info()}),t},n.get=function(t){return r[t]},n}var i=this,a=null;i.$get=e,i.setStrategy=t,e.$inject=["$timeout","$window"]}i["default"]=a},{}],5:[function(t,e,i){"use strict";function a(t,e){function i(){var i=t.defer();return e.navigator.geolocation.getCurrentPosition(i.resolve,i.reject),i.promise}var a={getCurrentPosition:i};return a}a.$inject=["$q","$window"],i["default"]=a},{}],6:[function(t,e,i){"use strict";function a(t){function e(e){t.log(e.name)}var i={trace:e};return i}a.$inject=["$log"],i["default"]=a},{}],7:[function(t,e,i){"use strict";var a=t("./services/data-view")["default"],n=t("./services/bike-stations")["default"],o=t("./services/lines")["default"];i["default"]=angular.module("velocity.data-view",["velocity.data"]).factory("DataView",a).factory("BikeStationsDataView",n).factory("LinesDataView",o)},{"./services/bike-stations":8,"./services/data-view":9,"./services/lines":10}],8:[function(t,e,i){"use strict";function a(t){return parseInt(t,10)}function n(t,e){function i(t){return t.data.opendata.answer.data.station}function n(t){return{id:t.number,latitude:t.latitude,longitude:t.longitude,name:t.name,totalslots:a(t.slotsavailable)+a(t.bikesavailable),slotsavailable:a(t.slotsavailable),bikesavailable:a(t.bikesavailable),district:t.district}}return t(e,i,n)}n.$inject=["DataView","BikeStationsData"],i["default"]=n},{}],9:[function(t,e,i){"use strict";function a(t){return t.data.opendata.answer.data}function n(t){return t}function o(t,e,i,o){this.get=function(s){function r(t){var e=(i||a)(t);angular.isArray(e)&&(e=e.map(o||n)),l.resolve(e)}var l=t.defer();return e.get(s).then(r,l.reject),l.promise},this.getById=function(e){function i(t){t.forEach(function(t){e===t.id&&a.resolve(t)}),a.reject()}var a=t.defer();return this.get().then(i,a.reject),a.promise}}function s(t){return function(e,i,a){return new o(t,e,i,a)}}s.$inject=["$q"],i["default"]=s},{}],10:[function(t,e,i){"use strict";function a(t,e){return t(e)}a.$inject=["DataView","LinesData"],i["default"]=a},{}],11:[function(t,e,i){"use strict";function a(t,e){var i=t.$get();e.setStrategy(i.sessionStorage)}a.$inject=["$windowProvider","CacheStorageProvider"],i["default"]=a},{}],12:[function(t,e,i){"use strict";i["default"]={url:"http://data.keolis-rennes.com/json/",version:"2.0",key:"618UNE6MRZ1E43L"}},{}],13:[function(t,e,i){"use strict";var a=t("./config/cache")["default"],n=t("./constant/api")["default"],o=t("./services/http-cache")["default"],s=t("./services/api-service")["default"],r=t("./services/bike-districts")["default"],l=t("./services/bike-stations")["default"],u=t("./services/lines")["default"];i["default"]=angular.module("velocity.data",["ngResource","velocity.common"]).config(a).constant("OpenDataApi",n).factory("HttpCache",o).factory("ApiService",s).factory("BikeDistrictsData",r).factory("BikeStationsData",l).factory("LinesData",u)},{"./config/cache":11,"./constant/api":12,"./services/api-service":14,"./services/bike-districts":15,"./services/bike-stations":16,"./services/http-cache":17,"./services/lines":18}],14:[function(t,e,i){"use strict";function a(t,e,i){function a(a){return{get:function(o){return t({url:i.url,method:"GET",params:n(a,o),cache:e})}}}function n(t,e){var a={version:i.version,key:i.key},n=angular.extend({},a,{cmd:t});return angular.forEach(e,function(t,e){n["param["+e+"]"]=t}),n}return a}a.$inject=["$http","HttpCache","OpenDataApi"],i["default"]=a},{}],15:[function(t,e,i){"use strict";function a(t){return t("getbikedistricts")}a.$inject=["ApiService"],i["default"]=a},{}],16:[function(t,e,i){"use strict";function a(t){return t("getbikestations")}a.$inject=["ApiService"],i["default"]=a},{}],17:[function(t,e,i){"use strict";function a(t){return t("velocity:http-cache")}a.$inject=["CacheStorage"],i["default"]=a},{}],18:[function(t,e,i){"use strict";function a(t){return t("getlines")}a.$inject=["ApiService"],i["default"]=a},{}],19:[function(t,e){"use strict";e.exports=angular.module("velocity.templates",[]).run(["$templateCache",function(t){t.put("partials/views/bike-stations/detail.html",'<h1>Station {{vm.station.name}}</h1><h3>Quartier {{vm.station.district}}</h3><div><label for="slots_available_{{vm.station.id}}"><span>Places disponibles :</span><meter id="slots_available_{{vm.station.id}}" min="0" optimum="{{(vm.station.totalslots)/2}}" low="{{(vm.station.totalslots)*1/4}}" high="{{(vm.station.totalslots)*3/4}}" max="{{vm.station.totalslots}}" value="{{vm.station.slotsavailable}}">{{vm.station.slotsavailable}}</meter></label></div><div><label for="bikes_available_{{vm.station.id}}"><span>Vélos disponibles :</span><meter id="bikes_available_{{vm.station.id}}" min="0" optimum="{{(vm.station.totalslots)/2}}" low="{{(vm.station.totalslots)*1/4}}" high="{{(vm.station.totalslots)*3/4}}" max="{{vm.station.totalslots}}" value="{{vm.station.bikesavailable}}">{{vm.station.bikesavailable}}</meter></label></div><nav><button data-ng-click="vm.geolocalize()">Geolocalize</button></nav><section id="map"><div class="map" data-ui-map="vm.map" data-ui-options="vm.options"></div></section>'),t.put("partials/views/bike-stations/list.html",'<h1>Stations de vélos</h1><ul><li data-ng-repeat="station in vm.stations"><a data-ng-href="#/bike-stations/{{station.id}}"><span>{{station.id}}</span> <span>{{station.name}}</span> <span>{{station.slotsavailable}}</span>/<span>{{station.bikesavailable}}</span></a></li></ul>'),t.put("partials/views/lines/list.html",'<h1>Lignes de bus</h1><ul><li data-ng-repeat="line in vm.lines"><a data-ng-href="#/lines"><img data-ng-src="{{vm.baseUrl}}{{line.picto}}" title="Ligne {{line.name}}"></a></li></ul>'),t.put("partials/views/welcome/index.html",'<h1>Welcome in velocity app. <span class="Application__Version">v{{vm.appVersion}}</span></h1><section class="Feature"><h3 class="Feature__Title">Velocity features</h3><ul class="Feature__List"><li class="Feature__Item"><span class="Feature__Version">v0.0.3</span> <span>Line list page</span></li><li class="Feature__Item"><span class="Feature__Version">v0.0.2</span> <span>Session storage based HTTP cache</span></li><li class="Feature__Item"><span class="Feature__Version">v0.0.1</span> <span>Bike station list page</span></li><li class="Feature__Item"><span class="Feature__Version">v0.0.1</span> <span>Bike station detail page</span></li></ul></section>')}])},{}],20:[function(t,e,i){"use strict";i["default"]=[{url:"/welcome",title:"Welcome",templateUrl:"partials/views/welcome/index.html",controller:"Welcome as vm",otherwise:!0},{url:"/bike-stations",title:"Liste des stations de vélos",templateUrl:"partials/views/bike-stations/list.html",controller:"BikeStations as vm",resolve:{stations:["BikeStationsDataView",function(t){return t.get()}]}},{url:"/bike-stations/:id",title:"Détail d'une station de vélo",templateUrl:"partials/views/bike-stations/detail.html",controller:"BikeStationDetail as vm",params:["id"]},{url:"/lines",title:"Lignes de bus",templateUrl:"partials/views/lines/list.html",controller:"Lines as vm"}]},{}],21:[function(t,e,i){"use strict";function a(t,e){n.forEach(function(e){t.when(e.url,{templateUrl:e.templateUrl,controller:e.controller,resolve:e.resolve}),e.otherwise&&t.otherwise({redirectTo:e.url})}),e.html5Mode(!1)}var n=t("./routes")["default"];a.$inject=["$routeProvider","$locationProvider"],i["default"]=a},{"./routes":20}],22:[function(t,e,i){"use strict";function a(t,e,i){function a(){i.getCurrentPosition().then(function(t){var e=t.coords,i=new google.maps.LatLng(e.latitude,e.longitude);n.map.setCenter(i),n.markers.push(new google.maps.Marker({map:n.map,position:i,icon:"https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png"}))})}var n=this;n.station={},n.map={},n.options={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP},n.markers=[],n.geolocalize=a,e.getById(t.id).then(function(t){var e=new google.maps.LatLng(t.latitude,t.longitude);n.station=t,n.map.panTo(e),n.markers.push(new google.maps.Marker({map:n.map,position:e,icon:"https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png"}))})}a.$inject=["$routeParams","BikeStationsDataView","Geolocation"],i["default"]=a},{}],23:[function(t,e,i){"use strict";function a(t,e){var i=this;i.stations=e}a.$inject=["BikeStationsDataView","stations"],i["default"]=a},{}],24:[function(t,e,i){"use strict";function a(t){var e=this;e.lines=[],e.baseUrl="",t.get({size:100}).then(function(t){e.baseUrl=t.baseurl,e.lines=t.line})}a.$inject=["LinesDataView"],i["default"]=a},{}],25:[function(t,e,i){"use strict";function a(){var t=this;t.links=n.filter(function(t){return!t.params}).map(function(t){return{title:t.title,url:t.url}})}var n=t("../config/routes")["default"];i["default"]=a},{"../config/routes":20}],26:[function(t,e,i){"use strict";function a(){var t=this;t.appVersion=n.version}var n=t("../../../../../package");i["default"]=a},{"../../../../../package":2}],27:[function(t,e,i){"use strict";var a=t("./config/routing")["default"],n=t("./controller/navigation")["default"],o=t("./controller/welcome")["default"],s=t("./controller/bike-stations")["default"],r=t("./controller/bike-station-detail")["default"],l=t("./controller/lines")["default"];i["default"]=angular.module("velocity.view",["ngRoute","ngTouch","ui.map","velocity.common","velocity.data-view","velocity.templates"]).config(a).controller("Navigation",n).controller("Welcome",o).controller("BikeStations",s).controller("BikeStationDetail",r).controller("Lines",l)},{"./config/routing":21,"./controller/bike-station-detail":22,"./controller/bike-stations":23,"./controller/lines":24,"./controller/navigation":25,"./controller/welcome":26}]},{},[1]);