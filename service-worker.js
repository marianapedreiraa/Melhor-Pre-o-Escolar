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
        './assets/img/16.png',
        './assets/img/20.png',

        './assets/img/29.png',
        './assets/img/32.png',
        './assets/img/40.png',
        './assets/img/58.png',
        './assets/img/57.png',
        './assets/img/60.png',
        './assets/img/64.png',
        './assets/img/72.png',
        './assets/img/76.png',
        './assets/img/80.png',
        './assets/img/87.png',
        './assets/img/100.png',
        './assets/img/114.png',
        './assets/img/120.png',
        './assets/img/128.png',
        './assets/img/144.png',
        './assets/img/152.png',
        './assets/img/167.png',
        './assets/img/180.png',
        './assets/img/192.png',
        './assets/img/256.png',
        './assets/img/192.png',
        './assets/img/256.png',
        './assets/img/512.png',
        './assets/img/1024.png',
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
