var CacheName = 'cache'; 
self.addEventListener('install' , (event) => {
event.waitUntil(
    caches.open(CacheName).then( (cache) => {
        return cache.add([
            '/',
            '/index.html',
            '/restaurant.html',
            '/styles.css',
            '/js/main.js',
            '/js/restaurant_info.js',
            '/js/dbhelper.js',
            '/data/restaurants.json',
            '/img/1.jpg',
            '/img/2.jpg',
            '/img/3.jpg',
            '/img/4.jpg',
            '/img/5.jpg',
            '/img/6.jpg',
            '/img/7.jpg',
            '/img/8.jpg',
            '/img/9.jpg',
            '/img/10.jpg',
    ]);
    })
);
});

self.addEventListener('activate' ,(event) => {
event.waitUntil(
    caches.keys()
    .then((CacheNames) => {
        return Promise.all(
            CacheNames.filter((Cachename) => {
                return Cachename != CacheName &&  Cachename.startsWith('restaurant-')
            }).map((cacheName) => {
               return caches.delete(cacheName);
            }
            )
        )
    })
)
});
self.addEventListener( 'fetch' ,(event) => {
    event.respondWith(
        caches.match(eventrequest)
        .then((response) => {
            return response || fetch(event.request);
        })
    )
})
