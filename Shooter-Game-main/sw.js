//PWA GAME STEP 2
const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [ //PWA GAME STEP 3
  '/',
  '/index.html',
  '/Game.js',
  '/Entity.js',
  '/Shot.js',
  '/Character.js',
  '/Player.js',
  '/Opponent.js',
  '/Shot.js',
  '/Boss.js',
  '/main.js',
  '/game.css',
  '/assets/boss_dead.png',
  '/assets/boss.png',
  '/assets/class.png',
  '/assets/game_over.png',
  '/assets/game.png',
  '/assets/opponent_dead.png',
  '/assets/opponent.png',
  '/assets/player_dead.png',
  '/assets/player.png',
  '/assets/shot1.png',
  '/assets/shot2.png',
  '/assets/you_win.png'
];

 
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});