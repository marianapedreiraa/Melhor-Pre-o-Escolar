var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/img/appstore.png',
        './assets/img/banner.png',
        './assets/img/pic01.png',
        './assets/img/Designer.png',
        './assets/img/pic02.png',
        './assets/img/pic03.png',
        './assets/img/playstore.png',
        './assets/img/spotlight01.png',
        './assets/img/spotlight02(1).png',
        './assets/img/spotlight03.png',
        './assets/img/ios/16.png',
        './assets/img/20.png',

        './assets/img/58/29.png',
        './assets/img/58/32.png',
        './assets/img/58/40.png',
        './images/AppImages/io/58.png',
        './images/AppImages/io/57.png',
        './images/AppImages/io/60.png',
        './images/AppImages/io/64.png',
        './images/AppImages/io/72.png',
        './images/AppImages/io/76.png',
        './images/AppImages/io/80.png',
        './images/AppImages/io/87.png',
        './images/AppImages/io/100.png',
        './images/AppImages/io/114.png',
        './images/AppImages/io/120.png',
        './images/AppImages/io/128.png',
        './images/AppImages/io/144.png',
        './images/AppImages/io/152.png',
        './images/AppImages/io/167.png',
        './images/AppImages/io/180.png',
        './images/AppImages/io/192.png',
        './images/AppImages/io/256.png',
        './images/AppImages/io/192.png',
        './images/AppImages/io.png',
        './images/AppImages/ios/512.png',
        './images/AppImages/ios/1024.png',
        './assets/img/01.png',
        './assets/img/02.png',
        './assets/img/03.png',
        './assets/img/04.png',
        './assets/img/05.png',
        './assets/img/06.png',
        './assets/img/07.png',
        './assets/img/08.png',
        './assets/img/09.png',
        './assets/img/10.png',
        './assets/img/11.png',
        './assets/img/12.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
