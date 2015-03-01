'use strict';

/**
 * @ngInject()
 */
function ImageLoader() {
  var canvas = document.createElement('canvas');
  document.body.innerHTML = '';

  function load(uri) {
    return new Promise(function async(resolve, reject) {
      var image = new Image();
      image.crossOrigin = 'anonymous';
      image.src = uri;
      image.addEventListener('load', onLoad);
      image.addEventListener('error', onError);
      function onLoad(event) {
        resolve(image, event);
      }
      function onError(error) {
        reject(error);
      }
    });
  }

  function get(uri) {
    return load(uri).then(function onLoadImage(image){
      canvas.height = image.height;
      canvas.width = image.width;
      var context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      var dataURL = canvas.toDataURL('image/png');
      return dataURL;
    });
  }

  function cache() {
    return new Promise(function async(resolve, reject) {
      var list = ['https://angularjs.org/img/AngularJS-large.png', 'https://angularjs.org/img/AngularJS-small.png'];
      Promise.all(list.map(function  onEachUri(uri) {
        return get(uri).then(function onGetData(data) {
          return {
            uri: uri,
            data: data
          }
        });
      })).then(resolve, reject);
    });
  }

}
